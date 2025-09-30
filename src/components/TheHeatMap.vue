<script setup>
import { onMounted, ref, watch, computed } from "vue"
import d3 from "@/d3-importer.js"
import { useScreenStore } from "@/stores/screen.js"
import { useAppStore } from "@/stores/app.js"
import { useI18n } from "vue-i18n"

const screenSize = useScreenStore()
const appStore = useAppStore()
const { t } = useI18n()

onMounted(() => {
  tooltip.value = d3.select("#tooltip")
})

watch(
  () => appStore.allSet,
  () => {
    drawHeatMap()
  },
)

const tooltip = ref(null)

const svg = ref(null)
const ctr = ref(null)

const vizDimensions = ref({
  width: null,
  height: null,
  margin: {
    top: null,
    right: null,
    bottom: null,
    left: null,
  },
  ctrWidth: null,
  ctrHeight: null,
})

const yearsDomain = ref([])
const variableDomain = ref([])
const colorDomain = ref([])

const xScale = ref(null)
const xAxis = ref(null)

const yScale = ref(null)
const yAxis = ref(null)

const colorScale = ref(null)

async function drawHeatMap() {
  yearsDomain.value = await getYearsDomain()
  variableDomain.value = await getVariableDomain()
  colorDomain.value = await getColorDomain()

  await initiateSvg()
  await setXScale()
  await setYScale()
  await setColorScale()
  await drawXaxis()
  await drawYaxis()
  await drawRectangles()
  appStore.mapDrawn = true
}

async function updateAxes(type) {
  if (screenSize.isMobile) {
    type === "years" ? updateYaxis() : updateXaxis()
  } else {
    type === "years" ? updateXaxis() : updateYaxis()
  }
}

async function setVizDimensions(element) {
  vizDimensions.value.width = element.node().getBoundingClientRect().width

  const heightFactor = screenSize.isMobile ? 1.5 : 0.25

  vizDimensions.value.height = vizDimensions.value.width * heightFactor

  vizDimensions.value.margin.top = screenSize.isMobile ? 150 : 10
  vizDimensions.value.margin.right = 10
  vizDimensions.value.margin.bottom = screenSize.isMobile ? 10 : 40
  vizDimensions.value.margin.left = 10

  vizDimensions.value.ctrWidth =
    vizDimensions.value.width - vizDimensions.value.margin.left - vizDimensions.value.margin.right

  vizDimensions.value.ctrHeight =
    vizDimensions.value.height - vizDimensions.value.margin.top - vizDimensions.value.margin.bottom
}

const pointZero = screenSize.isMobile ? 25 : 260

// Setting up the SVG
async function initiateSvg() {
  // Select the target element and get its width
  const element = d3.select("#heat-map")

  await setVizDimensions(element)

  // Create the SVG and set the viewBox
  svg.value = element
    .append("svg")
    .attr("id", "svg-visualization")
    .attr("viewBox", `0 0 ${vizDimensions.value.width} ${vizDimensions.value.height}`)

  ctr.value = svg.value
    .append("g")
    .attr("id", "visualization-ctr")
    .attr(
      "transform",
      `translate(${vizDimensions.value.margin.left}, ${vizDimensions.value.margin.top})`,
    )
}

watch(
  () => appStore.selectedYearsRange,
  async () => {
    if (!appStore.allSet) return

    yearsDomain.value = await getYearsDomain()
    await updateAxes("years")
    await drawRectangles()
  },
)

watch(
  () => appStore.selectedVariable,
  async () => {
    if (!appStore.allSet) return

    variableDomain.value = await getVariableDomain()
    await updateAxes("variable")
    await drawRectangles()
  },
)

watch(
  () => appStore.percentageValues,
  async () => {
    if (!appStore.allSet) return

    colorDomain.value = await getColorDomain()
    await drawRectangles()
  },
)

async function getYearsDomain() {
  const range = appStore.selectedYearsRange

  const start = range[0]
  const end = range[1]

  let yearsDomain

  if (start === end) {
    yearsDomain = [start]
  } else if (start < end) {
    yearsDomain = Array.from({ length: end - start + 1 }, (_, i) => start + i)
  } else {
    yearsDomain = Array.from({ length: start - end + 1 }, (_, i) => start - i)
  }

  return screenSize.isMobile ? yearsDomain.reverse() : yearsDomain
}

async function getVariableDomain() {
  if (!appStore.selectedVariable) return null

  return [
    ...new Set(
      appStore.boardMembers[appStore.selectedVariable].map((obj) =>
        t(`variables.${appStore.selectedVariable}.${obj[appStore.selectedVariable]}`),
      ),
    ),
  ]
}

async function getColorDomain() {
  if (!appStore.selectedVariable) return null

  if (appStore.percentageValues) {
    return [0, 50, 100]
  } else {
    const minMax = d3.extent(
      appStore.boardMembers[appStore.selectedVariable].map((item) => item.Count),
    )
    const midValue = minMax[0] + minMax[1] / 2
    return [minMax[0], midValue, minMax[1]]
  }
}

const xDomain = computed(() => {
  if (!appStore.allSet) return [""]

  return screenSize.isMobile ? variableDomain.value : yearsDomain.value
})

const yDomain = computed(() => {
  if (!appStore.allSet) return [""]

  return screenSize.isMobile ? yearsDomain.value : variableDomain.value
})

async function setXScale() {
  xScale.value = d3
    .scaleBand()
    .domain(xDomain.value)
    .range([pointZero, vizDimensions.value.ctrWidth])
    .align(0.5)
}

async function drawXaxis() {
  const axisCall = screenSize.isMobile ? d3.axisTop(xScale.value) : d3.axisBottom(xScale.value)
  const yTranslation = screenSize.isMobile ? 0 : vizDimensions.value.ctrHeight
  const labelRotation = screenSize.isMobile ? "-90" : "-45"
  const labelAnchor = screenSize.isMobile ? "start" : "end"

  xAxis.value = ctr.value
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${yTranslation})`)
    .style("font-size", () => (screenSize.isMobile ? "10px" : "14px"))

  xAxis.value.call(axisCall.tickSize(0).tickPadding(8))

  xAxis.value
    .selectAll("text")
    .attr("transform", `rotate(${labelRotation})`)
    .style("text-anchor", `${labelAnchor}`)

  if (screenSize.isMobile) {
    xAxis.value.selectAll("text").attr("dx", "1.25em").attr("dy", "1.5em")
  }
}

async function updateXaxis() {
  if (!xScale.value) return

  const axisCall = screenSize.isMobile ? d3.axisTop(xScale.value) : d3.axisBottom(xScale.value)
  const labelRotation = screenSize.isMobile ? "-90" : "-45"
  const labelAnchor = screenSize.isMobile ? "start" : "end"

  xScale.value.domain(xDomain.value)

  xAxis.value
    .call(axisCall.tickSize(0).tickPadding(8))
    .selectAll("text")
    .attr("transform", `rotate(${labelRotation})`)
    .style("text-anchor", `${labelAnchor}`)

  if (screenSize.isMobile) {
    xAxis.value.selectAll("text").attr("dx", "1.25em").attr("dy", "1.5em")
  }
}

async function setYScale() {
  yScale.value = d3
    .scaleBand()
    .domain(yDomain.value)
    .range([0, vizDimensions.value.ctrHeight])
    .align(0.5)
}

async function drawYaxis() {
  yAxis.value = ctr.value
    .append("g")
    .attr("id", "y-axis")
    .attr("transform", `translate(${pointZero}, 0)`)
    .style("font-size", () => (screenSize.isMobile ? "10px" : "14px"))
    .call(d3.axisLeft(yScale.value).tickSize(0).tickPadding(8))
}

async function updateYaxis() {
  if (!yScale.value) return

  yScale.value.domain(yDomain.value)
  yAxis.value.call(d3.axisLeft(yScale.value).tickSize(0).tickPadding(8))
}

async function setColorScale() {
  colorScale.value = d3.scaleLinear().range(appStore.colors).domain(colorDomain.value)
}

function accessorHelper(variable, value) {
  return t(`variables.${variable}.${value}`)
}

function xAccessor(d) {
  const parameter = screenSize.isMobile
    ? accessorHelper(appStore.selectedVariable, d[appStore.selectedVariable])
    : d.Year
  return xScale.value(parameter)
}

function yAccessor(d) {
  const parameter = screenSize.isMobile
    ? d.Year
    : accessorHelper(appStore.selectedVariable, d[appStore.selectedVariable])
  return yScale.value(parameter)
}

function colorAccessor(d) {
  return appStore.percentageValues ? colorScale.value(d.Percentage) : colorScale.value(d.Count)
}

async function drawRectangles() {
  const data = appStore.boardMembers[appStore.selectedVariable].filter((item) =>
    yearsDomain.value.includes(item.Year),
  )

  let rectGroup = ctr.value.select(".rect-group")

  if (rectGroup.empty()) {
    rectGroup = ctr.value.append("g").attr("class", "rect-group")
  }

  // Bind data to rectangles and handle exit transition first
  const rectangles = rectGroup
    .selectAll("rect")
    .data(data, (d) => `${d.Year}_${d[appStore.selectedVariable]}`)

  // (exit) =>
  rectangles.exit().remove()

  // ENTER + UPDATE
  rectangles
    .enter()
    .append("rect")
    .attr("class", "rectangle")
    .merge(rectangles) // ← merge new and existing rects
    .attr("x", (d) => xAccessor(d))
    .attr("y", (d) => yAccessor(d))
    .attr("width", xScale.value.bandwidth())
    .attr("height", yScale.value.bandwidth())
    .attr("stroke", "black")
    .attr("fill", (d) => colorAccessor(d))
    .attr("cursor", "pointer")
    .on("mouseover", (_, d) => {
      addMouseover(d)
    })
    .on("mousemove", (event) => handleMouseMove(event))
    .on("mouseout", () => hideTooltip())
}

function addMouseover(d) {
  tooltip.value.select(".year").text(d.Year)
  tooltip.value
    .select(".variable")
    .text(t(`variables.${appStore.selectedVariable}.${d[appStore.selectedVariable]}`))

  const label = appStore.percentageValues ? "%" : " board members"
  const value = appStore.percentageValues ? d.Percentage : d.Count
  tooltip.value.select(".value").text(`${value}${label}`)

  tooltip.value.style("visibility", "visible")
}

function handleMouseMove(event) {
  tooltip.value.style("left", `${event.clientX + 15}px`).style("top", `${event.clientY - 60}px`)
}

function hideTooltip() {
  tooltip.value.style("visibility", "hidden")
}
</script>

<template>
  <div id="tooltip">
    <div class="year"></div>
    <div class="variable"></div>
    <div>&nbsp;</div>
    <div class="value"></div>
  </div>
</template>

<style scoped>
#tooltip {
  text-align: center;
  visibility: hidden;
  position: fixed;
  z-index: 10;
  background-color: rgba(247, 247, 247, 0.85);
  border-radius: 4px;
  padding: 5px;
  font-size: 14px;
}
</style>

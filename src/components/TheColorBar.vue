<script setup>
import { ref, watch } from "vue"
import d3 from "@/d3-importer.js"
import { useScreenStore } from "@/stores/screen.js"
import { useAppStore } from "@/stores/app.js"

const screenSize = useScreenStore()
const appStore = useAppStore()

watch(
  () => appStore.mapDrawn,
  () => {
    drawLegend()
  },
)

const svg = ref(null)
const ctr = ref(null)

const legendDimensions = ref({
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

const colorDomain = ref([])
const colorScale = ref(null)
const colorAxis = ref(null)

async function drawLegend() {
  d3.select("#svg-color-bar").remove()
  colorDomain.value = await getColorDomain()

  await initiateSvg()
  await setColorScale()
  await drawColorAxis()
  await drawColorBar()
}

async function setLegendDimensions() {
  const legendElement = d3.select("#color-bar")
  const mapElement = d3.select("#svg-visualization")

  legendDimensions.value.width = legendElement.node().getBoundingClientRect().width

  legendDimensions.value.height = screenSize.isMobile
    ? 150
    : await mapElement.node().getBoundingClientRect().height

  legendDimensions.value.margin.top = screenSize.isMobile ? 20 : 10
  legendDimensions.value.margin.right = 10
  legendDimensions.value.margin.bottom = screenSize.isMobile ? 10 : 40
  legendDimensions.value.margin.left = 0

  legendDimensions.value.ctrWidth =
    legendDimensions.value.width -
    legendDimensions.value.margin.left -
    legendDimensions.value.margin.right

  legendDimensions.value.ctrHeight =
    legendDimensions.value.height -
    legendDimensions.value.margin.top -
    legendDimensions.value.margin.bottom
}

async function initiateSvg() {
  // Select the target element and get its width
  const legendElement = d3.select("#color-bar")

  await setLegendDimensions()

  // Create the SVG and set the viewBox
  svg.value = legendElement
    .append("svg")
    .attr("id", "svg-color-bar")
    .attr("viewBox", `0 0 ${legendDimensions.value.width} ${legendDimensions.value.height}`)

  ctr.value = svg.value
    .append("g")
    .attr("id", "color-bar-ctr")
    .attr(
      "transform",
      `translate(${legendDimensions.value.margin.left}, ${legendDimensions.value.margin.top})`,
    )
}

watch(
  () => appStore.selectedVariable,
  async () => {
    if (!appStore.mapDrawn) return
    drawLegend()
  },
)

watch(
  () => appStore.absoluteValues,
  async () => {
    if (!appStore.mapDrawn) return
    drawLegend()
  },
)

async function getColorDomain() {
  if (!appStore.selectedVariable) return null

  if (appStore.absoluteValues) {
    const minMax = d3.extent(
      appStore.boardMembers[appStore.selectedVariable].map((item) => item.Count),
    )
    return [minMax[0], minMax[1]]
  } else {
    const minMax = d3.extent(
      appStore.boardMembers[appStore.selectedVariable].map((item) => item.Percentage),
    )
    return [minMax[0], minMax[1]]
  }
}

const xTranslation = screenSize.isMobile ? 25 : 0
const colorBarDimension = screenSize.isMobile ? 25 : 30

async function setColorScale() {
  const xRange = screenSize.isMobile ? 0 : legendDimensions.value.ctrHeight
  const yRange = screenSize.isMobile ? legendDimensions.value.ctrWidth - xTranslation : 0

  colorScale.value = d3.scaleLinear().range([xRange, yRange]).domain(colorDomain.value).nice()
}

async function drawColorAxis() {
  const axisCall = screenSize.isMobile
    ? d3.axisTop(colorScale.value)
    : d3.axisRight(colorScale.value)

  colorAxis.value = ctr.value
    .append("g")
    .attr("transform", `translate(${colorBarDimension}, 0)`)
    .style("font-size", () => (screenSize.isMobile ? "10px" : "14px"))

  colorAxis.value.call(axisCall)
}

async function drawColorBar() {
  const gradientBarWidth = screenSize.isMobile ? legendDimensions.value.ctrWidth - xTranslation : 30
  const gradientBarHeight = screenSize.isMobile ? 25 : legendDimensions.value.ctrHeight

  let gradient = svg.value.select("#legendGradient")

  if (gradient.empty()) {
    // Create a linear gradient if it doesn't exist
    const defs = svg.value.append("defs")

    if (!screenSize.isMobile) {
      gradient = defs
        .append("linearGradient")
        .attr("id", "legendGradient")
        .attr("x1", "50%")
        .attr("x2", "50%")
        .attr("y1", "0%")
        .attr("y2", "100%")
    } else {
      gradient = defs
        .append("linearGradient")
        .attr("id", "legendGradient")
        .attr("x1", "100%")
        .attr("x2", "0%")
        .attr("y1", "50%")
        .attr("y2", "50%")
    }

    // Add color stops to the gradient
    gradient.append("stop").attr("offset", "0%").attr("stop-color", appStore.colors[2])
    gradient.append("stop").attr("offset", "50%").attr("stop-color", appStore.colors[1])
    gradient.append("stop").attr("offset", "100%").attr("stop-color", appStore.colors[0])
  }

  ctr.value
    .append("rect")
    .attr("id", "gradient-bar")
    .attr("x", xTranslation)
    .attr("y", 0)
    .attr("width", gradientBarWidth)
    .attr("height", gradientBarHeight)
    .style("fill", "url(#legendGradient)")
}
</script>

<template><div></div></template>

import { ref, computed, watch } from "vue"
import { defineStore } from "pinia"
import { useI18n } from "vue-i18n"
import d3 from "@/d3-importer.js"
import { updateUrl } from "@/utils/url/updateUrl.js"
import { useRoute, useRouter } from "vue-router"

export const useAppStore = defineStore("app", () => {
  const route = useRoute()
  const router = useRouter()
  const { t } = useI18n()
  const leaders = ref(null)
  const variables = ref([])
  const years = ref([])

  const colors = ref(["#f7fbff", "#6baed6", "#08306b"])

  const selectedData = ref("board")

  const dataOptions = [
    { label: t("data.board"), value: "board" },
    { label: t("data.ceos"), value: "ceos" },
  ]

  const selectedVariable = ref(null)
  const absoluteValues = ref(false)
  const selectedYearsRange = ref([])

  const allSet = ref(false)
  const mapDrawn = ref(false)

  watch(
    // Redo it all it the dataset changes
    () => selectedData.value,
    async (newValue) => {

      if (newValue === "board" && selectedVariable.value === "inBoard") {
        selectedVariable.value = "independence"
      }

      if (newValue === "ceos" && selectedVariable.value === "independence") {
        selectedVariable.value = "inBoard"
      }

      d3.select("#svg-visualization").remove()
      d3.select("#svg-color-bar").remove()
      resetData()
      await loadAndSetData()
      updateUrl(route, router)
    },
  )

  async function resetData() {
    leaders.value = null
    variables.value = []
    years.value = []
    allSet.value = false
    mapDrawn.value = false
  }

  async function loadAndSetData() {
    try {
      allSet.value = false
      await getData()
      await getVariables(leaders.value)
      await setRandomVariable(variables.value)
      await getYears(leaders.value, variables.value)
      await setDefaultYearsRange(years.value)
      allSet.value = true
    } catch (error) {
      console.error("Failed in loadAndSetData:", error)
    }
  }

  const dataToFetch = computed(() => {
    return selectedData.value === "board" ? "boardMembers.json" : "ceos.json"
  })

  const shownEntities = computed(() => {
    return selectedData.value === "board" ? "board seats" : "CEO positions"
  })

  async function getData() {
    const timestamp = Date.now()

    try {
      const response = await fetch(`/data/${dataToFetch.value}?v=${timestamp}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      leaders.value = data
    } catch (error) {
      console.error("Failed to load data:", error)
      leaders.value = null
    }
  }

  async function getVariables(leaders) {
    const options = Object.keys(leaders)

    variables.value = options.map((option) => {
      return {
        label: t(`variables.${option}`),
        value: option,
      }
    })
  }

  async function setRandomVariable(variables) {
    if (!selectedVariable.value) {
      // Otherwise it is set by the URL
      if (!leaders.value || !variables || variables.length === 0) {
        selectedVariable.value = "" // nothing to compute
      }
      selectedVariable.value = variables[Math.floor(Math.random() * variables.length)]["value"]
    }
  }

  async function getYears(leaders, variables) {
    if (!leaders || !variables || variables.length === 0) {
      return [] // nothing to compute
    }

    const firstVar = variables[0].value
    const memberData = leaders[firstVar] || []

    years.value = [...new Set(memberData.map((obj) => obj.Year))].sort((a, b) => a - b)
  }

  async function setDefaultYearsRange(years) {
    if (selectedYearsRange.value.length === 0) {
      if (!years || !years.length) {
        selectedYearsRange.value = []
        return
      }

      selectedYearsRange.value = [years[0], years[years.length - 1]]
    }
  }

  return {
    resetData,
    loadAndSetData,
    leaders,
    variables,
    years,
    dataOptions,
    selectedData,
    selectedVariable,
    selectedYearsRange,
    allSet,
    absoluteValues,
    colors,
    mapDrawn,
    shownEntities
  }
})

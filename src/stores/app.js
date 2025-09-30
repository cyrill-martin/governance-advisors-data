import { ref } from "vue"
import { defineStore } from "pinia"
import { useI18n } from "vue-i18n"

export const useAppStore = defineStore("app", () => {
  const { t } = useI18n()
  const boardMembers = ref(null)
  const variables = ref([])
  const years = ref([])

  const colors = ref(["#FFEB84", "#4682B4", "#191970"])

  const selectedVariable = ref(null)
  const percentageValues = ref(false)
  const selectedYearsRange = ref([])

  const allSet = ref(false)
  const mapDrawn = ref(false)

  async function loadAndSetData() {
    try {
      await getBoardMembers()
      await getVariables(boardMembers.value)
      await setRandomVariable(variables.value)
      await getYears(boardMembers.value, variables.value)
      await setDefaultYearsRange(years.value)
      allSet.value = true
    } catch (error) {
      console.error("Failed in loadAndSetData:", error)
    }
  }

  async function getBoardMembers() {
    try {
      const response = await fetch("/data/boardMembers.json")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("Board data loaded:", data)

      boardMembers.value = data
    } catch (error) {
      console.error("Failed to load board data:", error)

      boardMembers.value = null
    }
  }

  async function getVariables(boardMembers) {
    const options = Object.keys(boardMembers)

    variables.value = options.map((option) => {
      return {
        label: t(`variables.${option}`),
        value: option,
      }
    })
  }

  async function setRandomVariable(variables) {
    if (!boardMembers.value || !variables || variables.length === 0) {
      selectedVariable.value = "" // nothing to compute
    }
    selectedVariable.value = variables[Math.floor(Math.random() * variables.length)]["value"]
  }

  async function getYears(boardMembers, variables) {
    if (!boardMembers || !variables || variables.length === 0) {
      return [] // nothing to compute
    }

    const firstVar = variables[0].value
    const memberData = boardMembers[firstVar] || []

    years.value = [...new Set(memberData.map((obj) => obj.Year))].sort((a, b) => a - b)
  }

  async function setDefaultYearsRange(years) {
    if (!years || !years.length) {
      selectedYearsRange.value = []
      return
    }

    selectedYearsRange.value = [years[0], years[years.length - 1]]
  }

  return {
    loadAndSetData,
    boardMembers,
    variables,
    years,
    selectedVariable,
    selectedYearsRange,
    allSet,
    percentageValues,
    colors,
    mapDrawn,
  }
})

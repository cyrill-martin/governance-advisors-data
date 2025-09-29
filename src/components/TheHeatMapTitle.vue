<script setup>
import { computed } from "vue"
import { useAppStore } from "@/stores/app.js"
import { useI18n } from "vue-i18n"
const { t } = useI18n()

const appStore = useAppStore()

const heatMapTitle = computed(() => {
  if (appStore.selectedVariable) {
    const varibleLabel = t(`variables.${appStore.selectedVariable}`)

    return `${varibleLabel} (${appStore.selectedYearsRange[0]} - ${appStore.selectedYearsRange[1]})`
  } else {
    return "Select a variable and a range of years above"
  }
})
</script>

<template>
  <h3>{{ heatMapTitle }}</h3>
</template>

<script setup>
import { computed } from "vue"
import { useAppStore } from "@/stores/app.js"
import { useI18n } from "vue-i18n"
const { t } = useI18n()

const appStore = useAppStore()

const heatMapTitle = computed(() => {
  if (appStore.selectedVariable) {
    const index = t(`index.${appStore.selectedIndex}.short`)
    const dataGroup = t(`data.${appStore.selectedGroup}`)
    const varibleLabel = t(`variables.${appStore.selectedVariable}`)

    return `${index} ${dataGroup} – ${varibleLabel} (${appStore.selectedYearsRange[0]} - ${appStore.selectedYearsRange[1]})`
  } else {
    return "Select a variable and a range of years above"
  }
})
</script>

<template>
  <div>
    <h3>{{ heatMapTitle }}</h3>
  </div>
</template>

<style scoped></style>

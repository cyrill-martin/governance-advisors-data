<script setup>
import { computed } from "vue"
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()

const legendTitle = computed(() => {
  const upperCaseLabel = appStore.shownEntities.charAt(0).toUpperCase() + appStore.shownEntities.slice(1);
  return appStore.absoluteValues ? `${upperCaseLabel} (count)` : `${upperCaseLabel} (%)`
})
</script>

<template>
  <h5>{{ legendTitle }}</h5>
</template>

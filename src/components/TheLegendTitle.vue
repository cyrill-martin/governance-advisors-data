<script setup>
import { computed } from "vue"
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()

const legendTitle = computed(() => {
  return appStore.absoluteValues ? "Board members (count)" : "Board members (%)"
})
</script>

<template>
  <h5>{{ legendTitle }}</h5>
</template>

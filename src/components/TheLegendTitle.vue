<script setup>
import { computed } from "vue"
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()

const legendTitle = computed(() => {
  return appStore.percentageValues ? "Board members (%)" : "Board members (count)"
})
</script>

<template>
  <h5>{{ legendTitle }}</h5>
</template>

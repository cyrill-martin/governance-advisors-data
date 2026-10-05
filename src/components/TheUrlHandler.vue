<script setup>
import { onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useAppStore } from "@/stores/app.js"
import { updateUrl } from "@/utils/url/updateUrl.js"

const appStore = useAppStore()
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  await router.isReady()

  // Whitelist of known parameters
  const knownParams = new Set(["ds", "ch", "yl", "yu", "av"])

  // Filter out tracking params
  const filteredParams = {}
  for (const [key, value] of Object.entries(route.query)) {
    if (knownParams.has(key)) {
      filteredParams[key] = value
    }
  }

  // Update URL if we removed any params
  if (Object.keys(filteredParams).length < Object.keys(route.query).length) {
    await router.replace({ query: filteredParams })
  }

  // Use filtered params
  const qParams = filteredParams

  const ds = qParams.ds || null
  const ch = qParams.ch || null
  const yl = qParams.yl || null
  const yu = qParams.yu || null
  const av = qParams.av || null

  if (Object.keys(qParams).length > 0) {
    if (ds) {
      appStore.selectedData = ds
    }

    if (ch) {
      appStore.selectedVariable = ch
    }

    if (yl && !yu) {
      appStore.selectedYearsRange[0] = parseInt(yl)
      appStore.selectedYearsRange[1] = parseInt(yl)
    }

    if (yu && !yl) {
      appStore.selectedYearsRange[0] = parseInt(yu)
      appStore.selectedYearsRange[1] = parseInt(yu)
    }

    if (yl && yu) {
      appStore.selectedYearsRange[0] = parseInt(yl)
      appStore.selectedYearsRange[1] = parseInt(yu)
    }

    if (av === "true") {
      appStore.absoluteValues = true
    }

    await appStore.loadAndSetData()
    updateUrl(route, router)
  } else {
    await appStore.loadAndSetData()
    updateUrl(route, router)
  }
})
</script>

<template>
  <span></span>
</template>

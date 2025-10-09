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
  // Access query parameters
  const qParams = route.query

  const ch = qParams.ch || null
  const yl = qParams.yl || null
  const yu = qParams.yu || null
  const av = qParams.av || null

  if (Object.keys(qParams).length > 0) {
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

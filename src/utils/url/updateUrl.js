import { useAppStore } from "@/stores/app.js"

export async function updateUrl(route, router) {
  const appStore = useAppStore()

  const params = {
    ch: appStore.selectedVariable,
    yl: appStore.selectedYearsRange[0],
    yu: appStore.selectedYearsRange[1],
    av: appStore.absoluteValues,
  }

  const currentQuery = { ...params }

  return router.push({ query: currentQuery })
}

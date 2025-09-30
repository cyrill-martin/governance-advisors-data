import { ref, computed } from "vue"
import { defineStore } from "pinia"

const mobileThreshold = 999

export const useScreenStore = defineStore("screen", () => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const isMobile = computed(() => width.value <= mobileThreshold)

  const updateScreenSize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  return { width, height, isMobile, updateScreenSize }
})

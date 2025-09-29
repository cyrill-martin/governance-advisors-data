import { useScreenStore } from "@/stores/screen.js"

export default {
  install() {
    const screenSizeStore = useScreenStore()
    function updateScreenSize() {
      screenSizeStore.updateScreenSize()
    }
    window.addEventListener("resize", updateScreenSize)
  },
}

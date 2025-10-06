<script setup>
import { computed } from "vue"
import { NFlex } from "naive-ui"
import TheControls from "@/components/TheControls.vue"
import TheHeatMap from "@/components/TheHeatMap.vue"
import TheHeatMapTitle from "@/components/TheHeatMapTitle.vue"
import TheColorBar from "@/components/TheColorBar.vue"
import TheLegendTitle from "@/components/TheLegendTitle.vue"
import { useScreenStore } from "@/stores/screen.js"

const screenSize = useScreenStore()

const mainHeight = computed(() => {
  return screenSize.isMobile ? screenSize.width * 1.75 : screenSize.width * 0.25
})
</script>

<template>
  <n-flex vertical>
    <div>
      <h1>Board of Directors</h1>
    </div>
    <div>
      <TheControls />
    </div>
    <div>
      <n-flex :vertical="screenSize.isMobile">
        <div class="flex-map">
          <TheHeatMapTitle />
        </div>
        <div class="flex-bar">
          <TheLegendTitle />
        </div>
      </n-flex>
    </div>
    <n-flex :style="{ flexDirection: screenSize.isMobile ? 'column-reverse' : 'row' }">
      <div class="flex-map" id="heat-map" :style="{ height: mainHeight + 'px' }">
        <TheHeatMap />
      </div>
      <div class="flex-bar" id="color-bar">
        <TheColorBar />
      </div>
    </n-flex>
  </n-flex>
</template>

<style scoped>
.flex-map,
.flex-bar {
  flex: auto;
}
@media (min-width: 1000px) {
  .flex-map {
    flex: 9;
  }
  .flex-bar {
    flex: 1;
  }
}
</style>

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
      <h1>{{ $t("home.title") }}</h1>
      <p>
        Explore how the composition of SMI boards has evolved over time.<br />
        Use the controls below to focus on different characteristics and years.
      </p>
    </div>
    <div class="controls">
      <TheControls />
    </div>
    <div class="titles">
      <n-flex :vertical="screenSize.isMobile">
        <div class="flex-map">
          <div class="center-trick">
            <TheHeatMapTitle />
          </div>
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
@media (min-width: 1000px) {
  .controls {
    margin-bottom: 3rem;
  }
  .flex-map {
    flex: 9;
  }
  .flex-bar {
    flex: 1;
  }
  .center-trick {
    position: relative;
    left: 180px;
  }
}
</style>

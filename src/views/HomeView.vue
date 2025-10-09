<script setup>
import { defineAsyncComponent, computed } from "vue"
import { NFlex } from "naive-ui"
import TheHeatMapTitle from "@/components/TheHeatMapTitle.vue"
import TheLegendTitle from "@/components/TheLegendTitle.vue"
import { useScreenStore } from "@/stores/screen.js"
import TheHeatMap from "@/components/TheHeatMap.vue"
const TheControls = defineAsyncComponent(() => import("@/components/TheControls.vue"))
const TheColorBar = defineAsyncComponent(() => import("@/components/TheColorBar.vue"))

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
        This heat map shows how SMI board composition has changed over time.<br />
        Each square represents the number of board seats with a given characteristic in that
        year.<br /><br />
        Use the controls below to explore different characteristics and year ranges.
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

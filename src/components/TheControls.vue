<script setup>
import { computed } from "vue"
import { NFlex, NSelect, NSlider, NSwitch } from "naive-ui"
import { useAppStore } from "@/stores/app.js"
import { useScreenStore } from "@/stores/screen.js"

const appStore = useAppStore()
const screenSize = useScreenStore()

const selectedData = computed({
  get: () => appStore.selectedData,
  set: (value) => (appStore.selectedData = value),
})

const options = computed(() => {
  return appStore.variables
})

const selectedValue = computed({
  get: () => appStore.selectedVariable,
  set: (value) => (appStore.selectedVariable = value),
})

const absoluteValues = computed({
  get: () => appStore.absoluteValues,
  set: (value) => (appStore.absoluteValues = value),
})

const yearsRange = computed({
  get: () => appStore.selectedYearsRange,
  set: (value) => (appStore.selectedYearsRange = value),
})

const marks = computed(() => {
  return {
    [appStore.years[0]]: appStore.years[0],
    [appStore.years[appStore.years.length - 1]]: appStore.years[appStore.years.length - 1],
  }
})

const flexSize = computed(() => {
  return screenSize.isMobile ? [0, 15] : [45, 0]
})

const flexAlignment = computed(() => {
  return screenSize.isMobile ? "none" : "end"
})
</script>

<template>
  <n-flex
    v-if="appStore.mapDrawn"
    :size="flexSize"
    :align="flexAlignment"
    :vertical="screenSize.isMobile"
  >
    <div class="select">
      <n-flex vertical>
        <n-flex vertical class="data-select">
          <label>{{ $t("controls.data") }}</label>
          <n-select v-model:value="selectedData" :options="appStore.dataOptions" />
        </n-flex>
        <n-flex vertical>
          <label>{{ $t("controls.select") }}</label>
          <n-select v-model:value="selectedValue" :options="options" />
        </n-flex>
      </n-flex>
    </div>
    <div class="toggle">
      <n-flex vertical>
        <n-flex>
          <n-switch v-model:value="absoluteValues" />
          <span :class="{ inactive: !absoluteValues }">{{ $t("controls.toggle") }}</span>
        </n-flex>
      </n-flex>
    </div>
    <div class="slider" :class="{ 'on-desktop': !screenSize.isMobile }">
      <n-flex vertical>
        <label>{{ $t("controls.slider") }}</label>
        <n-slider
          v-model:value="yearsRange"
          range
          :step="1"
          :min="appStore.years[0]"
          :max="appStore.years[appStore.years.length - 1]"
          :marks="marks"
          placement="bottom"
          width="50%"
        />
      </n-flex>
    </div>
  </n-flex>
</template>

<style scoped>
label {
  font-weight: bold;
}
.select {
  flex: 1;
}
.toggle {
  flex: 1;
}
.slider {
  flex: 2;
}
.inactive {
  color: #d4d4d4;
}
/* Pull the slider down so its track, not the year marks, sits level with the select */
.slider.on-desktop {
  margin-bottom: -22px;
  padding-right: 9%;
}
.data-select {
  margin-bottom: 1.5rem;
}
</style>

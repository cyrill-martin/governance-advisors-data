<script setup>
import { computed } from "vue"
import { NFlex, NSelect, NSlider, NSwitch } from "naive-ui"
import { useAppStore } from "@/stores/app.js"
import { useScreenStore } from "@/stores/screen.js"

const appStore = useAppStore()
const screenSize = useScreenStore()

const options = computed(() => {
  return appStore.variables
})

const selectedValue = computed({
  get: () => appStore.selectedVariable,
  set: (value) => (appStore.selectedVariable = value),
})

const percentageValues = computed({
  get: () => appStore.percentageValues,
  set: (value) => (appStore.percentageValues = value),
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
  return screenSize.isMobile ? "none" : "center"
})
</script>

<template>
  <n-flex
    v-if="appStore.allSet"
    :size="flexSize"
    :align="flexAlignment"
    :vertical="screenSize.isMobile"
  >
    <div class="flex-1 select">
      <n-flex vertical>
        <label>Variable</label>
        <n-select v-model:value="selectedValue" :options="options" />
      </n-flex>
    </div>
    <div class="flex-1 toggle">
      <n-flex vertical align="start">
        <label v-if="!screenSize.isMobile">&nbsp;</label>
        <n-flex>
          <n-switch v-model:value="percentageValues">tttt</n-switch>
          <span :class="{ inactive: !percentageValues }">Percentages</span>
        </n-flex>
      </n-flex>
    </div>
    <div class="flex-1 slider">
      <n-flex vertical>
        <label>Years</label>
        <n-slider
          v-model:value="yearsRange"
          range
          :step="1"
          :min="appStore.years[0]"
          :max="appStore.years[appStore.years.length - 1]"
          :marks="marks"
          placement="bottom"
        />
      </n-flex>
    </div>
  </n-flex>
</template>

<style scoped>
label {
  font-weight: bold;
}
.flex-1 {
  flex: 1;
}
.toggle {
  justify-content: left;
}
.inactive {
  color: #d4d4d4;
}
.flex-2 {
  flex: 2;
}
</style>

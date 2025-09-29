<script setup>
import { NFlex } from "naive-ui"
import TheControls from "@/components/TheControls.vue"
import TheHeatMap from "@/components/TheHeatMap.vue"
import TheHeatMapTitle from "@/components/TheHeatMapTitle.vue"
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
      <TheHeatMapTitle />
    </div>
    <div style="text-align: center">
      <span v-pre>{{ Hier kommt noch die Farblegende }}</span>
    </div>
    <div>
      <TheHeatMap />
    </div>
  </n-flex>
</template>

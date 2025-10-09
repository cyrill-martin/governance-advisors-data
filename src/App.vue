<script setup>
import { defineAsyncComponent } from "vue"
import { NConfigProvider, NMessageProvider, NFlex } from "naive-ui"
import { RouterView } from "vue-router"
import { naiveUithemeOverrides } from "@/utils/naiveUI/naiveUithemeOverrides.js"
import TheUrlHandler from "@/components/TheUrlHandler.vue"

const TheHeader = defineAsyncComponent(() => import("@/components/layout/TheHeader.vue"))
const TheFooter = defineAsyncComponent(() => import("@/components/layout/TheFooter.vue"))
</script>

<template>
  <n-config-provider :theme-overrides="naiveUithemeOverrides">
    <n-message-provider>
      <TheUrlHandler />
      <n-flex vertical :size="0" class="app-container">
        <header>
          <TheHeader />
        </header>
        <main>
          <RouterView />
        </main>
        <footer>
          <TheFooter />
        </footer>
      </n-flex>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

main > * {
  flex-grow: 1;
}

header {
  padding: 1rem 2rem 0rem 1rem;
}

main {
  padding: 1rem 2rem;
}

footer {
  padding: 1rem;
  text-align: center;
}
</style>

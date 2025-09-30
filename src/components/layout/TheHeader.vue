<script setup>
import logo from "@/assets/images/ga_logo.png"
import { ref } from "vue"
import { NFlex, NDrawer, NDrawerContent } from "naive-ui"

const showAbout = ref(false)

function handleAbout() {
  showAbout.value = true
}
</script>

<template>
  <n-flex align="center">
    <div class="home-link">
      <a href="https://governance-advisors.ch/daten/#" target="_blank">
        <img :src="logo" alt="The Governance Advisors logo" />
      </a>
    </div>
    <div class="navigation">
      <nav @click="handleAbout">
        {{ $t("header.navigation.about") }}
      </nav>
    </div>
  </n-flex>
  <n-drawer v-model:show="showAbout" :width="'75%'">
    <n-drawer-content closable>
      Some basic text about the data and the website, etc.</n-drawer-content
    >
  </n-drawer>
</template>

<style scoped>
.home-link {
  flex: 4;
  display: flex;
}

.home-link a {
  display: flex;
}

.home-link img {
  width: 180px;
}

.navigation {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.navigation nav {
  cursor: pointer;
}

@media only screen and (width <= 999px) {
  .home-link img {
    width: 125px;
  }
}
</style>

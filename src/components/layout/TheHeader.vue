<script setup>
import logo from "@/assets/images/ga_logo.png"
import chart from "@/assets/images/smi_number_of_companies_until2024.png"
import { ref, computed } from "vue"
import { NFlex, NDrawer, NDrawerContent } from "naive-ui"
import { useScreenStore } from "@/stores/screen.js"

const screenSize = useScreenStore()

const showAbout = ref(false)

const drawerWidth = computed(() => {
  return screenSize.isMobile ? "100%" : "50%"
})

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
  <n-drawer v-model:show="showAbout" :width="drawerWidth">
    <n-drawer-content closable>
      <div>
        <h3>Data</h3>
        The data presented on this website is based on companies listed in the
        <a
          href="https://www.six-group.com/en/market-data/indices/switzerland/equity/smi.html"
          target="_blank"
          rel="noopener noreferrer"
          >Swiss Market Index (SMI)</a
        >, the main blue-chip index of the SIX Swiss Exchange. The index introduced in 1988
        comprised 24 stocks, with four companies having two classes of shares in the index (Ciba
        Geigy, Nestlé, SBG, SBV). For the purposes of this analysis, the figure of 20 companies (or
        boards) in the SMI in 1988 is used.
      </div>
      <div>
        <h4>Number of SMI Companies per Year</h4>
        <img
          class="chart"
          :src="chart"
          alt="A chart about the number of companies in the Swiss Market Index (SMI) per year."
        />
      </div>
      <div>
        <h4>Further Information</h4>
        See
        <a href="https://governance-advisors.ch/daten/#" target="_blank"
          >governance-advisors.ch/data</a
        >
        for further information about scope and source of the data.
      </div>
      <div class="imprint">
        © 2025 Governance Advisors AG<br />
        Website by
        <a href="https://kmapper.com" target="_blank" rel="noopener noreferrer">kmapper GmbH</a>
      </div>
    </n-drawer-content>
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

.chart {
  width: 100%;
}

@media only screen and (width <= 999px) {
  .home-link img {
    width: 125px;
  }
}

.imprint {
  font-size: 12px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  text-align: right;
}
</style>

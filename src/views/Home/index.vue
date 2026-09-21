<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeProduct></HomeProduct>
  <!-- 测试面板组件 -->
  <HomePanel title="新鲜好物" subtitle="新鲜出炉 品质靠谱"></HomePanel>
</template>

<script setup lang="ts">
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeProduct from "./components/HomeProduct.vue";
import HomePanel from "./components/HomePannel.vue";
</script>

<style scoped></style>

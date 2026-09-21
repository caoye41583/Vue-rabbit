<!-- 新鲜好物 -->
<script setup lang="ts">
import HomePannel from "./HomePannel.vue";
import { useNewsStore } from "@/stores/news.ts";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

const newsStore = useNewsStore();

const { newsList } = storeToRefs(newsStore);

onMounted(() => {
  newsStore.getNewsList();
});
</script>

<template>
  <HomePannel title="新鲜好物" subtitle="新鲜出炉 品质靠谱">
    <!-- 下面是插槽主体内容模版 -->
    <ul class="goods-list">
      <li v-for="item in newsList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePannel>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>

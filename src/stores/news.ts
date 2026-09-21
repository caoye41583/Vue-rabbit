import { getNews, type NewsItem } from "@/apis/layout";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewsStore = defineStore("news", () => {
  const newsList = ref<NewsItem[]>([]);

  const getNewsList = async () => {
    const res = await getNews();
    console.log(res);
    newsList.value = res.result;
  };

  return {
    newsList,
    getNewsList,
  };
});

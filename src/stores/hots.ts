import { getHots, type HotsItem } from "@/apis/layout";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useHotsStore = defineStore("hots", () => {
  const hotsList = ref<HotsItem[]>([]);
  const getHotsList = async () => {
    const res = await getHots();
    hotsList.value = res.result;
  };

  return {
    hotsList,
    getHotsList,
  };
});

// 此代码用于提取并抽象，吸顶导航LayoutFixed和首页头部LayoutHead中从后端
// 从后端接口 /home/category/head 中拿到数据，并渲染
// 到页面顶部生成全部分类项 如 居家 美食 ...的导航栏

import { defineStore } from "pinia";
import { getCategoryAPI, type CategoryItem } from "@/apis/layout";
import { ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  // 导航列表数据
  // state导航列表数据
  const categoryList = ref<CategoryItem[]>([]);

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI();
    console.log(res);
    categoryList.value = res.result;
  };

  return {
    categoryList,
    getCategory,
  };
});

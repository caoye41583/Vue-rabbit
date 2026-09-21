// 此代码用于将轮播图数据封装为一个状态管理器，
// 以便在多个组件中共享轮播图数据
import { defineStore } from "pinia";
import { getBanner, type BannerItem } from "@/apis/layout.ts";
import { ref } from "vue";

export const useBannerStore = defineStore("banner", () => {
  // <BannerItem[]> 是 ref 的泛型参数，告诉 TypeScript："这个 ref 里面存的是 BannerItem 数组"。这里的 [] 是类型里的数组标记（上一题刚讲的，表示"数组类型"）。
  //   末尾的 ([]) 是传给 ref 的实参，也就是这个 ref 一开始的值——一个空数组。这是运行时的真实数
  const bannerList = ref<BannerItem[]>([]);
  // 尖括号 <> 里的是"类型"，圆括号 () 里的是"初始值"
  // action 函数，用于获取轮播图数据

  const getBannerList = async () => {
    const res = await getBanner();
    console.log(res);
    bannerList.value = res.result;
  };

  return {
    bannerList,
    getBannerList,
  };
});

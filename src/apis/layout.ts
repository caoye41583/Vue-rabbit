// 此代码用于从后端列表拿到layout页面的分类列表并渲染到页面中
import httpInstance from "@/utils/http";

// 以下为定义接口返回数据的类型，确保通过TS的类型检查
// 商品
// goods属性对应GoodsItem类型
export interface GoodsItem {
  id: string;
  name: string;
  desc: string;
  price: string; // 注意：价格是字符串 "49.00"，不是 number
  picture: string;
  discount: string | null; // 示例里都是 null，具体以后端为准
  orderNum: number | null;
}

// /home/category/head接口返回的第一层数据类型是一个数组，每个数组元素为一个CategoryItem
// CategoryItem这个对象，有5个属性，其中children属性是CategoryItem类型，对应后端返回的children字段，
// goods属性对应GoodsItem类型
// 分类项：children 递归引用自己
export interface CategoryItem {
  id: string;
  name: string;
  picture: string;
  // children项是CategoryItem类型组成的数组，对应后端返回的children字段
  children: CategoryItem[] | null;
  // goods项是GoodsItem类型组成的数组，对应后端返回的goods字段
  goods: GoodsItem[] | null;
}

// 整个响应的外壳
export interface ApiResult<T> {
  code: string;
  msg: string;
  result: T;
}

export interface BannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

// 注意：响应拦截器里已 `return res.data`，resolve 出的即是数据体（ApiResult），不是 AxiosResponse
export function getCategoryAPI() {
  return httpInstance({
    method: "GET",
    url: "/home/category/head",
  }) as unknown as Promise<ApiResult<CategoryItem[]>>;
}
// CategoryItem 本身不是一个数组，它是一个对象类型（单个分类项）。[] 这个后缀的意思是"由它组成的数组

export function getBanner() {
  return httpInstance({
    method: "GET",
    url: "/home/banner",
  }) as unknown as Promise<ApiResult<BannerItem[]>>;
}

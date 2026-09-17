// createRouter： 创建router实例
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      // 一级路由：主页
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          // 二级路由，首页的子路由
          path: "", // 默认二级路由设置
          name: "Home",
          component: Home,
        },
        {
          // 二级路由，分类页的子路由
          path: "category",
          name: "Category",
          component: Category,
        },
      ],
    },
    {
      // 一级路由   ：登录页
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;

<script setup lang="ts">
import { getCategory } from "@/apis/testAPI";
import { reactive, ref } from "vue";

let result = ref("");

function test() {
  getCategory()
    .then((res) => {
      console.log(res);
      result.value = res.result;
    })
    .catch((err) => {
      console.log(err);
      result.value = err;
    });
}
</script>

<template>
  <el-button type="primary">Primary</el-button>
  <button @click="test">test</button>
  <p>{{ result }}</p>
</template>

<style scoped></style>

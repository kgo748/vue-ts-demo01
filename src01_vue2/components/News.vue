<template>
    <!-- 因为全局配置了store，所以可以直接在页面里获取vuex里的值 -->
  <div>News: {{ $store.state.count }}</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "News",
});
</script>

<style scoped lang="less"></style>

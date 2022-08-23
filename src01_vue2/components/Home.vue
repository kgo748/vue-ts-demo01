<template>
  <div>
    Home: {{num}}
    <br />
    <button @click="incrementCount">执行vuex里的方法，改变count值</button>
    <br />
    <ul>
        <li v-for="(item, index) in $store.state.list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  computed: {
    // 使用计算属性获取vuex里的值
    num() {
      return this.$store.state.count;
    },
  },
  methods: {
    incrementCount() {
        // 触发mutations里定义的方法
        this.$store.commit('incrementCount')
    }
  }
});
</script>

<style scoped lang="less"></style>

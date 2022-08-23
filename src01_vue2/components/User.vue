<template>
  <div>
    <p>User组件</p>
    <P>count: {{count}}</P>
    <br />
    <button @click="incrementCount">执行vuex里的方法，改变count值</button>
    <br />
    <button @click="setCount">执行vuex里的方法，并传值</button>
    <br />
    <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from 'vuex'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "User",
  computed: {
    // 映射数据
    // 方式1
    ...mapState({
        count: state => state.count,
        list: state => state.list,
    })
    // 方式2，取名一样的可简写为：
    // ...mapState(['count', 'list'])
  },
  methods: {
    incrementCount() {
      // 触发mutations里定义的方法
      this.$store.commit("incrementCount");
    },
    setCount() {
      // 触发mutations里定义的方法并传值
      this.$store.commit("setCount", 15);
    },
  },
});
</script>

<style scoped lang="less"></style>

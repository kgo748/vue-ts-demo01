<template>
  <div>
    <p>Home组件</p>
    count: {{$store.state.count}}
    <br />
    count: {{count}}
    <br />
    num: {{num}}
    <br />
    <button @click="incrementCount">执行vuex里mutations的方法，改变count值</button>
    <br />
    <button @click="incrementCountAsync">异步执行vuex里actions的方法，改变count值</button>
    <br />
    <button @click="setActionCount(666)">执行vuex里actions的方法，改变count值，并传参</button>
    
  </div>
</template>

<script>
/* 组合式API里使用vuex */
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  setup() {
    const store = useStore()

    const count = computed(() => {
        return store.state.count
    })

    const incrementCount = () => {
        store.commit('incrementCount')
    }

    const num = computed(() => {
        return store.getters.num
    })

    const incrementCountAsync = () => {
        store.dispatch('incrementCount')
    }

    const setActionCount = (num) => {
        store.dispatch('setCount', num)
    }

    return {
        count,
        incrementCount,
        num,
        incrementCountAsync,
        setActionCount
    }
  }
});
</script>

<style scoped lang="less"></style>

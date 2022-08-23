<template>
  <div>
    <p>User组件</p>
    msg: {{msg}}---{{$store.state.msg}}
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "User",
  setup() {
    const store = useStore()

    return {
        msg: computed(() => {
            return store.state.msg
        })
    }
  }
});
</script>

<style scoped lang="less"></style>

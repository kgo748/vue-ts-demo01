/* store仓库 */
import { createStore } from 'vuex'

const store = createStore({
    // 定义数据
    state() {
        return {
            count: 1,
            list: ['马总', '刘总'],
            msg: 'Hello  Kitty...'
        }
    },
    // 计算属性
    getters: {
        reverseMsg(state) {
            state.msg.split('').reversr().join('')
        },
        num(state) {
            return state.count * state.count
        }
    },
    // 定义方法，操作state里的数据
    mutations: {
        incrementCount(state) {
            state.count++
        },
        setCount(state, num) {
            state.count = num
        },
        setMsg(state, msg) {
            state.msg = msg
        }
    },
    // 执行mutations里面的方法，异步操作放在actions里
    actions: {
        incrementCount(context) {
            setTimeout(() => {
                context.commit('incrementCount')
            }, 2000)
        },
        setCount({commit}, num) {
            commit('setCount', num)
        }
    }
})

export default store

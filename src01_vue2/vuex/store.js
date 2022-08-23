/* store仓库 */
import { createStore } from 'vuex'

const store = createStore({
    // 定义数据
    state() {
        return {
            count: 1,
            list: ['马总', '刘总']
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
    }
})

export default store

import Vue from 'vue'
import Router from 'vue-router'
import view1 from './views/view1.vue'
import view2 from './views/view2.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    //路由配置
    routes: [
        {
            path: '/view1',
            component: view1
        }, {
            path: '/view2',
            component: view2
        }, {
            path: '/*',
            component: view1
        }
    ]
})

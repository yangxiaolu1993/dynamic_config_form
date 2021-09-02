import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home.vue'
import Form from '@/view/form.vue'
import FormEasy from '@/view/formEasy.vue'

Vue.use(Router)


let routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: '首页'
    }
}, {
    path: '/form',
    name: 'form',
    component: Form,
    meta: {
        title: '表单动态配置'
    }
},{
    path: '/formEasy',
    name: 'formEasy',
    component: FormEasy,
    meta: {
        title: '表单动态配置'
    }
}]


const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    document.title = to.meta.title
    next()

})

export default router
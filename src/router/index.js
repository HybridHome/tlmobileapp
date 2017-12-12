import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main.vue'
import Tool from "../pages/tool.vue"
import My from "../pages/my.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            component: Main
        },
        {
            path: "/main",
            component: Main
        },
        {
            path: "/tool",
            component: Tool
        },
        {
            path: "/my",
            component: My
        }
    ]
});
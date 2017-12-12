import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main.vue'
import Tool from '../pages/tool.vue'
import Mine from '../pages/mine.vue'
import MemoNew from '../pages/tool/memonew.vue'
import MemoList from '../pages/tool/memolist.vue'
import Chart from '../pages/tool/chart.vue'
import Loadmore from '../pages/tool/loadmore.vue'
import MyInfo from '../pages/mine/MyInfo.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/main",
            component: Main
        },
        {
            path: "/tool",
            component: Tool
        },
        {
            path: "/mine",
            component: Mine
        }, ,
        {
            path: "/tool/memonew",
            component: MemoNew
        },
        {
            path: "/tool/memolist",
            component: MemoList
        },
        {
            path: "/tool/chart",
            component: Chart
        },
        {
            path: "/tool/loadmore",
            component: Loadmore
        },
        {
            path: "/mine/myinfo",
            component: MyInfo
        }
    ]
});
import Vue from "vue"
import Router from "vue-router"
import Home from "c/home/index"
import Money from "c/money/index"
import Ious from "c/ious/index"
import Raise from "c/raise/index"
import My from "c/my/index"
import Download from "c/special/download"
// import ZC from "c/zhongchou/index"
import Personal from "c/home/personal"

Vue.use(Router)

export default new Router({
  routes: [
    // 重定向
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/personal",
      name: "personal",
      component: Personal
    },
    {
      path: "/money",
      name: "money",
      component: Money
    },
    {
      path: "/ious",
      name: "ious",
      component: Ious
    },
    {
      path: "/raise",
      name: "raise",
      component: Raise
    },
    {
      path: "/my",
      name: "my",
      component: My
    },
    {
      path: "/download",
      name: "download",
      component: Download
    },
    // {
    //   path: "/zc",
    //   name: "zc",
    //   component: ZC
    // }
  ]
})

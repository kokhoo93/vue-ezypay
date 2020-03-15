import Vue from 'vue'
import VueRouter from 'vue-router'
import SubscriptionComponent from "../views/Subscription.vue"
import SuccessComponent from "../views/Success.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "create"
            }
        },
        {
            path: "/create",
            name: "create",
            component: SubscriptionComponent
        },
        {
            path: "/success",
            name: "success",
            component: SuccessComponent
        }
    ]
})
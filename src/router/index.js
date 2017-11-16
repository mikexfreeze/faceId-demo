import Vue from 'vue'
import Router from 'vue-router'
import faceId from '@/views/face-id/faceId.vue'
import faceSets from '@/views/face-sets/faceSets.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: faceId
        },
        {
            path: '/face-sets',
            name: 'face集合',
            component: faceSets
        },
    ]
})

/*
 * @Author: xiexiaoying
 * @Date: 2019-05-31 10:40:47
 * @Email: 634021337@qq.com 
 * @Description: 入口文件
 * @Last Modified by: xiexiaoying
 * @Last Modified time: 2019-06-17 10:40:47
 */
import Vue from 'vue'
import App from './app.vue'

import './assets/styles/reset.scss'

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(
    App,
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        anchorPlacement: 'top-bottom'
    })

).mount('#app')

createApp(App).use(router).mount('#app')

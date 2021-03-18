import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import VueYouTubeEmbed from "vue-youtube-embed";

import { library } from "@fortawesome/fontawesome-svg-core";
import VScrollLock from "v-scroll-lock";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueYouTubeEmbed);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

library.add(faArrowRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VScrollLock);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

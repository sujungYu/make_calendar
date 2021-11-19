import Vue from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(
  fas,
  far,
  fab
)

// import { faLink, faRedo, faUndo } from "@fortawesome/free-solid-svg-icons"; 
// import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

// library.add(faTrashAlt); 
// library.add(faLink, faRedo, faUndo);

Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

// Vuex
import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";

// Models de Vuex-ORM
import VuexORM from "@vuex-orm/core";
import { Database } from "@vuex-orm/core";
import Count from './models/Count';


const database = new Database();

database.register(Count);

const store = createStore({
    plugins: [VuexORM.install(database)],
  });

createApp(App).use(store).mount('#app')

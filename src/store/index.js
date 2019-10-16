import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: []
  },
  mutations: {
    addTarea(state, tarea){
      state.tareas.push(tarea);
    },
    deleteTarea(state, id){
      const tarea = state.tareas.find(tarea => tarea.id === id);
      const index = state.tareas.indexOf(tarea);
      state.tareas.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})

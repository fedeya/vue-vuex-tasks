<template>
  <div class="card center">
    <h4>Añadir Tareas</h4>
    <form @submit="handleSubmit" >
      <input type="text" v-model="tarea" class="input-field" placeholder="Tarea" >
      <button class="btn green accent-4 waves-effect">Añadir</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "Formulario",
    data(){
      return {
        tarea: ""
      }
    },
    methods: {
      ...mapMutations(["addTarea"]),
      handleSubmit(e){
        e.preventDefault();
        this.addTarea({ tarea: this.tarea, id: Date.now() });
        this.tarea = "";
      }
    }
}
</script>

<style>
  .card {
    padding: 10px;
  }

  button {
    width: 100%;
  }
</style>
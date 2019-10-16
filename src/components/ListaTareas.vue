<template>
  <ul class="collection"  v-if="tareas.length > 0">
    <li class="collection-item" v-for="tarea in tareas" :key="tarea.id">
      {{ tarea.tarea }}
      <i class="secondary-content material-icons red-text accent-4" @click="deleteTarea(tarea.id)" >delete</i>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["tareas"])
  },
  methods: {
    ...mapMutations(["deleteTarea"])
  }
}
</script>

<style>
  i {
    cursor: pointer;
  }
</style>
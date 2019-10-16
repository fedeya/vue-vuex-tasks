<template>
  <div id="app">
    <Header />
    <div class="container row">
      <div class="col s6">
        <Formulario />
      </div>
      <div class="col s6">
        <ListaTareas />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Formulario from "@/components/Formulario";
import ListaTareas from "@/components/ListaTareas";


export default {
  name: 'app',
  components: {
    Formulario,
    Header,
    ListaTareas
  }
}
</script>
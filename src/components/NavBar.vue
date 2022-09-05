<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid justify-content-center">
            <router-link to="/" class="navbar-brand">Crear usuario</router-link>
            <router-link to="/admin" class="navbar-brand">Lotes ganado</router-link>
        </div>
    </nav>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
      name: 'NavBar',
      components: {
      }
  })
  </script>
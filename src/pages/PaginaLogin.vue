<template>
    
    <div class="row inline">
      <q-form @submit="submitForm">
        <q-input v-model="Email" label="Email" type="text" />
        <q-input v-model="Password" label="Contraseña" type="password" />
        
        <q-btn type="submit" label="Loguear" color="primary" />
      </q-form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { Notify } from "quasar";
  
  export default {
    data() {
      return {
          Email: '',
          Password: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('https://storedb-api.onrender.com/users/signin', {
            email:  this.Email,
              password:  this.Password
          });
  
          Notify.create({
            type: "positive",
            message: "Logueado exitosamente",
          });
          debugger
        } catch (error) {
          console.error(error);
          debugger
        }
      }
    }
  };
  </script>

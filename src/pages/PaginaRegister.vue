<template>
    
  <div class="row inline">
    <q-form @submit="submitForm">
      <q-input v-model="FirstName" label="Nombre" />
      <q-input v-model="LastName" label="Apellido" />
      <q-input v-model="DateOfBirth" label="Fecha Cumpleaños" type="text" />
      <q-input v-model="Country" label="Ciudad" type="text" />
      <q-input v-model="Address" label="Direccion" type="text" />
      <q-input v-model="Email" label="Email" type="text" />
      <q-input v-model="Password" label="Contraseña" type="password" />
      
      <q-btn type="submit" label="Guardar" color="primary" />
    </q-form>
  </div>
</template>

<script>
import axios from 'axios';
import { Notify } from "quasar";

export default {
  data() {
    return {
        FirstName: '',
        LastName: '',
        DateOfBirth: '',
        Country: '',
        Address: '',
        Email: '',
        Password: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('https://storedb-api.onrender.com/users', {
            FirstName: this.FirstName,
            LastName: this.LastName,
            DateOfBirth:  this.DateOfBirth,
            Country:  this.Country,
            Address:  this.Address,
            Email:  this.Email,
            Password:  this.Password
        });

        Notify.create({
            type: "positive",
            message: "Agregado exitosamente",
          });
        debugger
      } catch (error) {
        console.error('Error al registrar:', error);
        debugger
      }
    }
  }
};
</script>

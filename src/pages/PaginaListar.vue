<template>
    
    <div class="row inline">
      <q-form @submit="submitForm">
        <q-input v-model="fechaInicio" label="Fecha Inicio" type="text" />
        <q-input v-model="fechaFin" label="Fecha Fin" type="text" />
        
        <q-btn type="submit" label="Buscar" color="primary" />

        

      </q-form>
    </div>

    <div class="row">
        <div
        class=" -item"
        v-for="informacion in informaciones"
        :key="informacion.date"
        style="padding: 50px"
      >
        <q-card class="my-card">
          <q-img
            :src="informacion.url"
          >
            <div class="absolute-bottom text-h6">{{ informacion.title }}</div>
          </q-img>

          <q-card-section> {{ informacion.explanation }} </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
          informaciones:[],
          fechaInicio:'',
          fechaFin:''
      };
    },
    methods: {
      async submitForm() {
        try {
        var url = 'https://api.nasa.gov/planetary/apod?api_key=i9CcTOFhNRwonT7ovDVBvE0dCafMGorYsfVTC5Ym&start_date='+ this.fechaInicio+'&end_date='+this.fechaFin
        debugger
          const response = await axios.get(url, {
            
          });
          this.informaciones = response.data
          console.log('respuesta exitoso:', response.data);
          debugger
        } catch (error) {
          console.error(error);
          debugger
        }
      }
    }
  };
  </script>

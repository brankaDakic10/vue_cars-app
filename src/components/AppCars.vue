
<template>
  <div class="container">
      

<div class="card" style="width: 18rem;" v-for="(car, key) in cars"
      :key="key">
  
  <div class="card-body">
    <h5 class="card-title">{{car.brand}}</h5>
    <h6 class="card-title">Model: {{car.model}}</h6>
    <p class="card-text">Year: {{car.year}}</p>
    <p class="card-text">MaxSpeed: {{car.maxSpeed}}</p>
    <p class="card-text">Number Of Doors: {{car.numberOfDoors}}</p>
   <!-- <a href="#" @click="editCar(car.id)" class="btn btn-primary">Edit</a> -->
   <router-link tag="button" :to="{ name: 'edit-car', params: { id: car.id }}" class="btn btn-primary" >Edit</router-link>
   <button href="#"  @click="deleteCar(car.id)" class="btn btn-warning">Delete</button>
  </div>
</div>



  </div>
</template>

<script>
import {carsService} from '../services/CarsService'
export default {
    data(){
      return{
          cars:[]
      }
    },
     created() {
      carsService.getAll()
          .then((response)=> {
            this.cars=response.data
             console.log(this.cars)
         }).catch((error)=> {
            console.log(error)
         })  
  
   
  },
  methods:{
      // editCar(id){
         
      //    this.$router.push('/edit/'+ id )
        
      // },

     deleteCar(id) {
          
            let confirmDelete = confirm('Do you want to delete this car?')
            if (confirmDelete) {
                carsService.delete(id)
               .then((success) => {
                   this.$router.push('/cars')
                    window.location.reload()
             }).catch((error)=> {
                console.log(error)
         })  
              
      }
            
  }
 }
      
}
</script>

<style>

</style>


<template>
  <div class="container">
          <article class="col-8 bgr">
            <!-- <h4>Add new car</h4> -->
            <h2>{{ this.$route.params.id ? 'Edit car' : 'Add new car'}}</h2>
            <form @submit.prevent="submit">
           
            <div class="form-group">
                <label >Brand</label>
                <input type="text"  v-model="newCar.brand" class="form-control"  placeholder=" Enter brand " pattern=".{2,}" required>
            </div>
            <div class="form-group">
                <label >Model</label>
                <input type="text"  v-model="newCar.model" class="form-control"  placeholder=" Enter model " pattern=".{2,}" required>
            </div>

             <div class="form-group">
                <label >Year</label><br>
             <select v-model="newCar.year" required >
            <option v-for="year in years" :key="year">{{year}}</option>
           
           
            </select>
            </div>

             <div class="form-group">
                <label >MaxSpeed</label>
                <input type="number"  v-model="newCar.maxSpeed" class="form-control"  placeholder=" Enter max speed " >
            </div>
            
           <div class="form-group">
                <label >Number Of Doors</label>
                <input type="number"  v-model="newCar.numberOfDoors" class="form-control"  placeholder=" Enter number Of Doors " required>
            </div>

             
            <div class="form-group">
                <label >Is Automatic?</label>
                <input type="checkbox"  v-model="newCar.isAutomatic" class="form-control" required>
            </div>

       
            <div class="form-group">
                <label >Engine</label><br>

                    <input type="radio" v-model="newCar.engine" value="diesel" required> diesel<br>
                    <input type="radio" v-model="newCar.engine" value="petrol" required> petrol<br>
                    <input type="radio"  v-model="newCar.engine" value="electric" required> electric<br>
                    <input type="radio"  v-model="newCar.engine" value="hybrid" required> hybrid<br>
            </div>

            <div class="form-group">
            <button class="btn btn-success">Submit</button> 
            <button type="reset" class="btn btn-primary" >Reset</button> 
            <button  class="btn btn-info" @click="showCarInfo" >Preview</button> 
            </div>
            </form>
    </article> 
  </div>
</template>

<script>
import {carsService} from '../services/CarsService'
export default {
    created() {
        if(this.$route.params.id){
        carsService.get(this.$route.params.id)
        .then((response) => {
            this.newCar=response.data
           
        }).catch((error) => {
            console.log(error)
        })
      }
        
    },
  data(){
     return{
        newCar:{
            brand:'',
            model:'',
            year:'',
            maxSpeed:'',
            numberOfDoors:'',
            isAutomatic:'',
            engine:''
        }  
      }
  },
  methods:{
      submit(){
    
         if(this.$route.params.id)
          {
            carsService.edit(this.$route.params.id, this.newCar)
           .then((response)=> {
          
            this.$router.push('/cars')
          }).catch((error)=>{
            console.log('Edit: '+ error)
         })  
          
          }
          else
          {
            carsService.add(this.newCar)
            .then((response)=> {
          
            this.$router.push('/cars')
          }).catch((error)=>{
            console.log('Add:'+ error)
         })  
          }
          
      },



      showCarInfo(){
          alert(
              'Brand: ' + this.newCar.brand + '\n' +
                'Model: ' + this.newCar.model + '\n' +
                'Year: ' + this.newCar.year + '\n' +
                'Max Speed: ' + this.newCar.maxSpeed + '\n' +
                'Number of doors: ' + this.newCar.numberOfDoors + '\n' +
                'Is automatic: ' + this.newCar.isAutomatic + '\n' +
                'Engine: ' + this.newCar.engine
            
          ) 
      }

  },
  computed:{
      years(){
          let years=[]
          for(let i=1990; i<=2018; i++){
              years.push(i);
          }
          return years;
      }
  }
  


}
</script>


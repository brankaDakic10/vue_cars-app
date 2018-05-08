<template>
  <div class="container">
          <article class="col-8 bgr">
            <h4>Add new car</h4>
            <form @submit.prevent="addNew">
           
            <div class="form-group">
                <label >Brand</label>
                <input type="text"  v-model="newCar.brand" class="form-control"  placeholder=" Enter brand ">
            </div>
            <div class="form-group">
                <label >Model</label>
                <input type="text"  v-model="newCar.model" class="form-control"  placeholder=" Enter model ">
            </div>

             <div class="form-group">
                <label >Year</label><br>
             <select v-model="newCar.year" >
            <option v-for="year in years" :key="year">{{year}}</option>
           
           
            </select>
            </div>

             <div class="form-group">
                <label >MaxSpeed</label>
                <input type="number"  v-model="newCar.maxSpeed" class="form-control"  placeholder=" Enter max speed ">
            </div>
            
           <div class="form-group">
                <label >Number Of Doors</label>
                <input type="number"  v-model="newCar.numberOfDoors" class="form-control"  placeholder=" Enter number Of Doors ">
            </div>

             
            <div class="form-group">
                <label >Is Automatic</label>
                <input type="checkbox"  v-model="newCar.isAutomatic" class="form-control">
            </div>

       
            <div class="form-group">
                <label >Engine</label><br>

                    <input type="radio" v-model="newCar.engine" value="diesel"> diesel<br>
                    <input type="radio" v-model="newCar.engine" value="petrol"> petrol<br>
                    <input type="radio"  v-model="newCar.engine" value="electric"> electric<br>
                    <input type="radio"  v-model="newCar.engine" value="hybrid"> hybrid<br>
            </div>

            <div class="form-group">
            <button class="btn btn-success">Add new car</button>
            </div>
            </form>
    </article> 
  </div>
</template>
<script>
import {carsService} from '../services/CarsService'
export default {
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
      addNew(){
          console.log(this.newCar)
          carsService.add(this.newCar)
            .then((response)=> {
          
            this.$router.push('/cars')
          }).catch((error)=>{
            console.log(error)
         })  
          
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


import axios from 'axios'

export default class CarsService{

    getAll(){
     return   axios.get('http://localhost:3000/api/cars')
       }





}


export const carsService=new CarsService()
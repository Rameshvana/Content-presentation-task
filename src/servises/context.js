import axios from "axios";


 export function getApiData(Url){
   return axios.get(Url)       
 }

export function saveData(Url,data){
   return axios.post(Url,data)       
}
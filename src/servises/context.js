import axios from "axios";

let get_Url = 'http://localhost:8000/restarents'
 export function getApiData(Url){
   return axios.get(get_Url)       
 }

 let save_Url = 'http://localhost:8000/add-restarent'
 export function saveData(Url,data){
   return axios.post(save_Url,data)       
}
export function deleteData(id){
    return axios.delete(id)
}
let a = 'http://localhost:8000/delete-restarent/'
export function deleteItem(Url,data){
  return axios.delete(a+data)
}
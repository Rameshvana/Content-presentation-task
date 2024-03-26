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


export function getOneData(id){
  let Url = 'http://localhost:8000/restarents/'+id
  return axios.get(Url)
}

export function UpdateData(id,data){
  let Update_url = `http://localhost:8000/update-restarent/${id}`
  console.log(Update_url)
  return axios.put(Update_url,data)
}
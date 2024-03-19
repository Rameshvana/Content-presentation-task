import { useState,useEffect } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import './index.css'
import { deleteItem, getApiData } from '../../servises/context';
import RestarentCard from '../restarentCard';

function HomeComponent(){

   const [restarent,setrestarent] = useState([])
   const navigate = useNavigate()
   
   console.log(restarent)
   const callThedata  = () => {
      getApiData()
      .then((res) => {
         alert('Get the data successfully')
         setrestarent(res.data)
         document.getElementById('res').style.display = 'block';

      })
      .catch(() => {
         alert('Get data failed')
      })
   }

   const gettheData = () => {
      let inputValue = document.getElementById('userInput').value;
      console.log(inputValue)
       callThedata();
       

   }   

   const getNavigate = () => {
     navigate("/add-restarent/")
   }
   
   const editData = (item) => {
      alert('Edit')
      //console.log(item)
   }

   const deleteData = (item) => {
      let id = (item._id)
      let del_Url = 'http://localhost:8000/delete-restarent/'+id
      
      deleteItem(null,id)
      .then(() => {
          alert('Data deleted.. ')
          callThedata();
      })
      .catch(() => {
          alert('Data deleted failed..')
      })
     
      
   }

   return(
        <div>

        <div className='bg-card'>
        <div className='ab'>
         <p className='heanding'>Find Dubai</p>
            <p className='bis' onClick={getNavigate}> <MdAddBusiness className='b-icon'/> Add Your Bisiness </p>
      
        </div>
          <div className='card'>
          <h2>Fast, FREE way to get experts.</h2>
          <div className='serch-card'>
            <input type="text" id="userInput" placeholder="Find your service here" className='serch-input'/>
            <button type="serch" className='serch-btn' onClick={gettheData}>GET EXPERTS</button>        
          </div>
          </div>  
        </div>
        <div>
         <h1 className='res'id='res'>Restaurants in Dubai</h1>
         <ul>
            {restarent.map((item ) => (
               <RestarentCard item={item} editData={editData} key={item.id} deleteData={deleteData}/>
            ))}
         </ul>
        </div>
   
        
      </div>
   )       
}

export default HomeComponent










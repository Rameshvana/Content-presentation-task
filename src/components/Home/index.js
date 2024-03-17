import { useState,useEffect } from 'react'

import './index.css'
import { getApiData } from '../../servises/context';
import RestarentCard from '../restarentCard';

function HomeComponent(){

   const [restarent,setrestarent] = useState([])
   console.log(restarent)
   const gettheData = () => {
      let inputValue = document.getElementById('userInput').value;
      console.log(inputValue)
       
      getApiData('http://localhost:8000/restarents')
      .then((res) => {
         alert('Get the data successfully')
         setrestarent(res.data)
      })
      .catch(() => {
         alert('Get data failed')
      })
      document.getElementById('res').style.display = 'block';
   }   

   useEffect(() => {
          
   })     

   return(
        <div>

        <div className='bg-card'>
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
               <RestarentCard item={item}/>
            ))}
         </ul>
        </div>
   
        
      </div>
   )       
}

export default HomeComponent










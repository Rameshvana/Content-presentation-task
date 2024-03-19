import './index.css'
import {gettheData, saveData} from '../../servises/context'
import { useNavigate } from "react-router-dom";

import { MdAddBusiness } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const { useState } = require("react")
let Url = "http://localhost:5000/add"

const AppComponent = () => {
   const [data,setData] = useState([])
  const navigate = useNavigate()

   const getData = () => {
      console.log('RAmesh')    
      let data = {
          student_name: document.getElementById('name').value,
          student_group: document.getElementById('group').value,
          student_marks : document.getElementById('marks').value
      }
      console.log(data)

      saveData(Url,data)
      .then((res) => {
          alert('Success')
      })
      .catch(() => {
          alert('Error')
      })

{/*      gettheData(Rrl)
      .then((res) => {
           setData(res.data)
           console.log(res.data)
      })
      .catch(() => {
           alert('Get property-type data is Failed..')
      }) */}

    
      
   }

   const saveThedata = (event) => {
    event.preventDefault();
      let name = document.getElementById('name').value

      const data = {
        restarent_name: name,
        description: name+document.getElementById('description').value,
        category: document.getElementById('reviews').value,
        location: document.getElementById('location').value,
        available: document.getElementById('available').value,
        image : 'https://media.gettyimages.com/id/1295387240/photo/delicious-meal.jpg?s=612x612&w=gi&k=20&c=MVcagVTGWtQKWS7w6OwjxJMH8RUkMr7SFwyWYHfAKSQ='
      }
    console.log(data)
    let Url = "http://localhost:8000/add-restarent"
    saveData(Url,data)
    .then(() => {
      alert('Save data in database successfully!')
    })
    .catch(() => {
      alert('Save data in database Failed!' )
    })    
  }

  const getNavigate = () => {
    navigate("/")
  }





   return(
    <div>

      <div className='bg-card'>
        <div className='ab'>
         <p className='heanding'>Find Dubai</p>
          <p className='bis' onClick={getNavigate}> <CgProfile className='b-icon' onClick={() => navigate('/')}/> Profile </p>
        </div>
        <div className='card '>
          <h2>Fast, FREE way to get experts.</h2>
          <div className='serch-card'>
            <input type="text" id="userInput" placeholder="Find your service here" className='serch-input'/>
            <button type="serch" className='serch-btn'>GET EXPERTS</button>        
          </div>
        </div>  
        </div>
     <div className='card q'>
        <form className="form-card" onSubmit={saveThedata}>
          
            <label className='label'>Restarent name</label><br/>
            <input type='text' className='input' id='name'/>
          
          <div>
            <label className='label'>Description</label> <br/>
            <textarea  name="w3review" rows="6" cols="53" id ='description'>
             is serving dishes inspired by Nikkei cuisine. Nikkei refers to the Japanese diaspora, those of Japanese ancestry who choose to live outside of Japan.
            </textarea>
          </div>
          <div>
            <label className='label'>Location</label> <br/>
            <input type='text' className='input' id='location'/>
          </div>
          <div>
            <label className='label'>Category</label><br/>
            <input type='text' className='input' id='reviews'/>
          </div>
          <div>
           <label className='label'>Select Timing</label> <br/>
           <select className='drop' id='available'>
            <option>9AM  - 7PM</option>
            <option>10PM-8PM</option>
           </select>
          </div>
          <div>
          <input type="file" accept="image/*"  />
          </div>
          <div>
            <button type='submit' className='sub-btn'>Submit</button>
            <button type='reset' className='clr-btn sub-btn'>Clear</button>
          </div>
   
        </form>  
     </div>
     </div>     
   )       
}


export default AppComponent
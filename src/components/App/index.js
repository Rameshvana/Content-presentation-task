import './index.css'
import {gettheData, saveData} from '../../servises/context'


const { useState } = require("react")
let Rrl = "http://localhost:5000/data"
let Url = "http://localhost:5000/add"

const AppComponent = () => {
   const [data,setData] = useState([])
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
   return(
     <div className='card'>
        <form className="form-card">
          <h3>Form Card</h3>
          <hr/>
          <div>
             <label>student Name</label> <br/>       
             <input type='text'  required id='name'/>       
          </div>
          <div>
             <label>student Group</label> <br/>       
             <input type='text'  required id='group'/>       
          </div>
          <div>
             <label>student Marks</label> <br/>       
             <input type='Number'  required id='marks'/>       
          </div>
          <button type='button' onClick={getData}>Submit</button>
        </form>  
     </div>     
   )       
}

export default AppComponent
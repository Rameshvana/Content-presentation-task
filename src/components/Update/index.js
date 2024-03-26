import { useParams,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './index.css'
import { useEffect, useState,useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";

import { UpdateData, getOneData } from '../../servises/context';

const UpdateComponent = () => {
   const [values,setvalues] = useState([])
   const [img,setImg] = useState('')
   const {id} = useParams();
   const navigate = useNavigate()


   const bisinessnameRef = useRef();
   const descriptionRef = useRef();
   const locationRef = useRef();
   const categoryRef = useRef();
   const availableRef = useRef();


   

   
   useEffect(() => {

    getOneData(id)
    .then((res) => {
      let data = res.data 
      //alert('Get the Data successfully!')
      setvalues(data)

      bisinessnameRef.current.value = data.restarent_name
      descriptionRef.current.value = data.description
      locationRef.current.value = data.location
      categoryRef.current.value = data.category
      availableRef.current.value = data.available
    })
    .catch(() => {
      //alert('Get the Data Failed!')
      //const {restarent_name,description,image,location,reviews,available,_id} = item
    })

   },[])
   
   const Updatedata = (event) => {
        event.preventDefault();
    let data = {
            restarent_name: bisinessnameRef.current.value,
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
            location: locationRef.current.value,
            available : availableRef.current.value,
            image : img
            //image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
      }
    
    console.log(data)
    UpdateData(id,data)
    .then(()=> {
      alert('Update Succesfully!')
    })
    .catch(() => {
      alert('UpdateFailed!')  
    })
   }

   const onImageselectionChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encoded string
      setImg(reader.result)
    }
    reader.onerror = error => {
      console.log('Error: ', error);
    };
  
    } 

   const {
    register,
    handleSubmit,
    formState : {errors},
 } = useForm();  

   return(
     <div>
      <div className='bg-card1'>
        <div className='ab'>
          <p className='heanding'>Find Dubai</p>
          <p className='bis' onClick={() => (navigate('/'))}> <IoHome className='b-icon' onClick={() => navigate('/')}/> Home </p>
        </div>
      </div>
      <div className='out'>
        <div>
        <p className='registation-para'>Update Business Form</p>
        <img src='https://media.istockphoto.com/id/1359362604/vector/woman-filling-form.webp?s=1024x1024&w=is&k=20&c=l9KlUNQNNdF40Qdjsv_tyaTJNyrmW142JocUdBZtKsU='
        className='a-img' />
        </div>
       <div className='card q'>
        <form className="form-card"  onSubmit={Updatedata}>

        <div className='input-card'> 
            <label className='label'>Restaurent name</label><br/>
            <input type='text' className='input' id='name' ref={bisinessnameRef} />
          </div>   
          <div className='input-card'>
            <label className='label'>Description</label> <br/>
            <textarea  name="w3review" rows="6" cols="48" id ='description' ref={descriptionRef}></textarea>
          </div>

          <div className='input-card'>
            <label className='label'>Location</label> <br/>
            <input type='text' className='input' id='location'  ref={locationRef}/>
          </div>

          <div className='input-card'>
            <label className='label'>Category</label><br/>
            <input type='text' className='input' id='reviews'  ref={categoryRef}/>
          </div>

          <div className='input-card'>
           <label className='label'>Select Timing</label> <br/>
           <select className='drop' id='available' ref={availableRef}>
            <option>9AM  - 7PM</option>
            <option>10AM - 8PM</option>
            <option>1AM - 9PM</option>
           </select>
          </div>
          <div className='img-card'>
              <input type="file" accept="image/*" onChange={onImageselectionChange} className='img-input'/>
              {img == '' ? '' : <img src={img} height={50} width={100} />}
          </div>
      
          <div>
            <button type='submit' className='sub-btn' onClick={Updatedata}>Update</button>
            <button type='reset' className='clr-btn sub-btn'>Clear</button>
          </div>
   
        </form>  
     </div>
      </div>
    </div> 
   ) 
}

export default UpdateComponent;
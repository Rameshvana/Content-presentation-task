import { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

import './index.css'
import { gettheData, saveData } from '../../servises/context'
import { useNavigate } from "react-router-dom";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import { MdAddBusiness } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";



let Url = "http://localhost:5000/add"

const AppComponent = () => {
  const [data, setData] = useState([])
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState('');
  const navigate = useNavigate()

  const getData = () => {
    console.log('RAmesh')
    let data = {
      student_name: document.getElementById('name').value,
      student_group: document.getElementById('group').value,
      student_marks: document.getElementById('marks').value
    }
    console.log(data)

    saveData(Url, data)
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

  const SaveRegistationData = (event) => {
    //event.preventDefault();
    let name = document.getElementById('name').value

    const data = {
      restarent_name: name,
      description: name + document.getElementById('description').value,
      category: document.getElementById('reviews').value,
      location: document.getElementById('location').value,
      available: document.getElementById('available').value,
      image: img
      //image: 'https://media.gettyimages.com/id/1295387240/photo/delicious-meal.jpg?s=612x612&w=gi&k=20&c=MVcagVTGWtQKWS7w6OwjxJMH8RUkMr7SFwyWYHfAKSQ='
    }
    console.log(data)
    let Url = "http://localhost:8000/add-restarent"
    saveData(Url, data)
      .then(() => {
        alert('Save data in database successfully!')
      })
      .catch(() => {
        alert('Save data in database Failed!')
      })
  }

 

  const onImageselectionChange = (e) => {
  console.log('Img')
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

  // Validations used restrict the user in a form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  return (
    <div>

      <div className='bg-card1'>
          <div className='ab'>
            <p className='heanding'>Find Dubai</p>
            <p className='bis' onClick={() => navigate('/')}> <IoHome className='b-icon' />Home</p>
          </div>
      </div>
      <div className='out'>

        <div>
          <p className='registation-para'>Business registation Form</p>
          <img src='https://media.istockphoto.com/id/1359362604/vector/woman-filling-form.webp?s=1024x1024&w=is&k=20&c=l9KlUNQNNdF40Qdjsv_tyaTJNyrmW142JocUdBZtKsU='
            className='a-img' />
        </div>

        <div className='card q'>
          <form className="form-card" onSubmit={handleSubmit(SaveRegistationData)}>
            <div className='input-card'>
              <label className='label'>Business name</label><br />
              <input type='text' className='input' id='name'  {...register('businessname', { required: true })} />
              {errors.businessname && <p className='error-para'>Business name required input.. </p>}
            </div>

            <div className='input-card'>
              <label className='label'>Description</label> <br />
              <textarea name="w3review" rows="6" cols="51" id='description' {...register('description', { required: true })}>
                is serving dishes inspired by Nikkei cuisine. Nikkei refers to the Japanese diaspora, those of Japanese ancestry who choose to live outside of Japan.
              </textarea>
              {errors.description && <p className='error-para'>Description required input.. </p>}
            </div>

            <div className='input-card'>
              <label className='label'>Location</label> <br />
              <input type='text' className='input' id='location' {...register('location', { required: true })} />
              {errors.location && <p className='error-para'>Location required input.. </p>}

            </div>

            <div className='input-card'>
              <label className='label'>Category</label><br />
              <input type='text' className='input' id='reviews' {...register('reviews', { required: true })} />
              {errors.reviews && <p className='error-para'>Category required input.. </p>}

            </div>
            <div className='input-card'>
              <label className='label'>Select Timings</label> <br />
              <select className='drop' id='available'>
                <option>9AM  - 7PM</option>
                <option>10PM-8PM</option>
              </select>
            </div>
            <div className='img-card'>
              <input type="file" accept="image/*" onChange={onImageselectionChange} className='img-input'
              {...register('image', { required: true })}/>
                {errors.image && <p className='error-para'>Image required input.. </p>}

              {img == '' ? '' : <img src={img} height={50} width={100} />}
            </div>
            <div>
              <button type='submit' className='sub-btn'>Submit</button>
              <button type='reset' className='clr-btn sub-btn'>Clear</button>
            </div>

          </form>
        </div>

      </div>

    </div>
  )
}


export default AppComponent
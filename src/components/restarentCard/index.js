import './index.css'
import {Link} from 'react-router-dom';
import { RiBubbleChartFill } from "react-icons/ri";
import { TiStar } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const RestarentCard = (props) => {
    const {item,editData,deleteData} = props
    const {restarent_name,description,image,location,reviews,available,_id} = item
    function em(){
     editData(item)
    }

    function delet(){
      deleteData(item)
    }

    return(
      <li className='item-card'>
        <div>
        <img src={image} className="image-card"/>
        <Link to={`/update/${_id}`}><button type='button' className='edit-btn'>Edit</button></Link>
       <button type='button' className='edit-btn' onClick={() => {delet()}}>Delete</button>
        </div>
        <div className='content-box'>
          <p className='name'>{restarent_name}</p>
        
          <div className='an'><p className='review'>1130 reviews</p><strong>Timings: {available}</strong></div>

          <hr/>
          <p><RiBubbleChartFill/>{description}<RiBubbleChartFill/></p>
          <hr/>
          <p className='location'><FaLocationDot className='icon'/>India - {location}</p>
          <button type="button" className='btn' >Book Now</button>
        </div>

        

      </li>   
    )      
}

export default RestarentCard
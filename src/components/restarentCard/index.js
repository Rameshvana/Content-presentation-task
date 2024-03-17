import './index.css'
import { RiBubbleChartFill } from "react-icons/ri";
import { TiStar } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
const RestarentCard = (props) => {
    const {item} = props
    const {restarent_name,description,image,location,reviews} = item
    console.log(item)
    return(
      <li className='item-card'>
        <img src={image} className="image-card"/>
        <div className='content-box'>
          <p className='name'>{restarent_name}</p>
          <div className='an'><p className='review'>{reviews} reviews</p><strong>Closed Today</strong></div>

          <hr/>
          <p><RiBubbleChartFill/>{description}<RiBubbleChartFill/></p>
          <hr/>
          <p><FaLocationDot className='icon'/>Dubai - United Arab Emirates</p>
          <button type="button" className='btn'>Book Now</button>
        </div>

        

      </li>   
    )      
}

export default RestarentCard
import pic from '../assets/pop1.jpeg.jpg'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className="card_container" style={props.style}>
      <p id="title">{props.name}</p>
      <img id="user_image" src={pic} alt="khushi" />
      <p id="user_discription"> Hi! Khushi this side</p>
    </div>
  )
}

export default Cards

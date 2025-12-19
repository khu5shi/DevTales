

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setname(e.target.value)}/>
      <p>Name state variable value inside {props.title}: {props.name}</p>
    </div>
  )
}

export default Card

import Card from './components/Card'
import './App.css'
import { useState } from 'react'

function App() {
 
// creAte manage change and sabhi child m state ko syn krwa denge
const [name,setname]=useState('');  
return (
    <div>
     <Card title="card1" name={name} setname={setname}/>
      <Card title="card2" name={name} setname={setname}/>

     {/* <p> I am inside parent component and value of name is : {name}</p> */}
    </div>
  )
}

export default App

import Cards from "./Components/Cards"


function App() {
  // similarly we can share description and all
  return (
    <div className="container" >
      <Cards name="Baby" style={{"border-radius":"10px"}}/>
      <Cards name="Anubhav" style={{"border-radius":"10px"}}/>
      <Cards name="khushi" style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App

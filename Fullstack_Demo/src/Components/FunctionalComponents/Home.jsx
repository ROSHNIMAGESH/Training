import React from 'react'
import '../../assets/css/Home.css'
var Styling={
    fontSize:"30px",
    color:"Blue",
    textDecoration:"underline"
}

const Home = () => {
  return (
    <div>
        <p className='boxModel'>HELLO</p>
        <h1 style={{textAlign:"center"}}>NavBar</h1>
        <p style={Styling}>This is NavBar</p>
        <p id='idSEg'>Hi</p>
        <p className='clr'>Color Change</p>
        <h1>This is Home page</h1>
    </div>
  )
}

export default Home
//lorem200 give random 200 words
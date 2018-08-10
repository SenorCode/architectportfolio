import React from 'react';



const span = {
  display: "block"
}

const highlight = {
  backgroundColor: "#1e1f2d36",
  padding:"0.1em"
}

const Home = () => (

  <div>

    <div className = "container">
        <div className = "jumbotron bg-transparent">
          <h1 className = "display-4"><span style ={span}>Hola, Soy</span>
          <hr className = "my-3"></hr>
          <span style = {span} className= "text-center display-2"><mark style = {highlight}> Nicolas Noel</mark></span></h1>
         <hr className ="my-3"></hr>
        </div>
    </div>
    
  </div>   
);

  


export default Home;
import React from "react";



const NavBar = () => (


<div>

  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-auto">
          <a className="nav-item nav-link active" href="#">Inicio <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Trabajos</a>
          <a className="nav-item nav-link" href="#">Sobre Mi</a>
          <a className="nav-item nav-link" href="#">Contactarme</a>

          
        </div>
      </div>
    </nav>
  </div>
</div> 
);
export default NavBar;

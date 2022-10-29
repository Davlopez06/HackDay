import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar=()=>{
    return(
        <div>
            <header className="nav-wrapper">
            <nav className="navid">
            <div className="nav left">
                <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Logo Here</a></h1></span>
                <button className="menu btn-nav"><span className="fas fa-bars"></span></button>
            </div>
            <div className="nav right">
                <Link to="/home" className="nav-link"><span className="nav-link-span"><span className="u-nav">Home</span></span></Link>
                <Link to="/agentes" href="#about" className="nav-link"><span className="nav-link-span"><span className="u-nav">Agentes</span></span></Link>
                <Link to="/indicadores" href="#work" className="nav-link"><span className="nav-link-span"><span className="u-nav">Indicadores</span></span></Link>
                <Link to="/Activos" href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Activos</span></span></Link>
            </div>
            </nav>
        </header>
      </div>
    )
}

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/css/navbar.css';
import pizza from "../assets/img/recipepizzaicon_109877.png";



export default function Navbar({ cost }) {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <div className="mynavbar">
            <nav className="navbar navbar-expand-md navbar-dark bg-danger">
                <span className="navbar-brand">
                    <img src={pizza} alt="poke-ticon" width={60}/>
                    <h6>Pizzería Mamma Mia!</h6>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNavAltMarkup">
                    <div className="Nav-link">
                        <NavLink className={setActiveClass} style={{ color: 'gray' }} to="/carrito" end>
                            <i className="fa-solid fa-cart-shopping">  ${cost} </i>
                        </NavLink>
                    </div>
                </div>
            </nav >
       
        </div >
    );
}
import React from "react";
import '../assets/css/hero.css'
import pizzaHero from '../assets/img/pizza-hero.png'

const Hero = () => {
    return (
        <section id = "header" className="jumbotron text-center background-hero" style={{ backgroundImage: `url(${pizzaHero})` }} >
            <h1 className="display-3 text-light">¡Pizzeria Mamma Mia!</h1>
            <p className="lead text-light">¡Tenemos las mejores pizzas que podrías encontrar!</p>
        </section >
    )
}
export default Hero;
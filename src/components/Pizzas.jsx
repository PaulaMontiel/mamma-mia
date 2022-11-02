import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/gallery.css";
import "../assets/css/pizzas.css";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

const Pizzas = ({ pizza }) => {
    const navigate = useNavigate();
    const { cost, setCost } = useContext(contextCost);
    const {cart, setCart} = useContext(cartContext);

    const goToGallery = () => {
        navigate(`/`);
    };

    const addToCart = (pizza) => {
        const newCart = cart;
        const totalAmount = cost + pizza.price;
        newCart.push(pizza);
        setCart([...newCart]);
        setCost(totalAmount);
    }

    if (pizza.hasOwnProperty("ingredients") && pizza.ingredients.length > 0) {

        return (
            <div className="container">
                <div className="row">
                    <div key={pizza.id} className="">
                        <div className="card d-flex flex-row m-4">
                            <img src={pizza.img} alt={pizza.name} className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title">{pizza.name}</h2>
                                <div>
                                    <p className="card-text">{pizza.desc}</p>
                                    {pizza.ingredients.map((ingredient) => (<h6>🍕{ingredient}</h6>))}
                                </div>
                                <br />
                                <h4>Precio : $ {pizza.price}</h4>

                                <button className="btn btn-outline-success btn-sm" onClick={() => goToGallery()}>Volver a la Galería</button>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => addToCart(pizza)}>Agregar 🛒</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pizzas;
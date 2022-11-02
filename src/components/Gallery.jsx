import "../assets/css/gallery.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import context from "../pizza_context";
import cartContext from "../cart_context";
import contextCost from "../total_amount_context";

export default function Gallery() {

    const navigate = useNavigate();
    const { pizzas } = useContext(context);
    const { cost, setCost } = useContext(contextCost);
    const {cart, setCart} = useContext(cartContext);

    const addToCart = (pizza) => {
        const newCart = cart;
        const totalAmount = cost + pizza.price;
        newCart.push(pizza);
        setCart([...newCart]);
        setCost(totalAmount);
    }

    const pizzaDetails = (id) => {
        if (pizzas.length > 0) {
            navigate(`/pizza/${id}`)
        }
    };
    return (
        <section id="gallery">
            <div className="container">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div key={pizza.id} className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={pizza.img} alt={pizza.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{pizza.name}</h5>
                                    <p className="card-text">{pizza.desc}</p>
                                    <button className="btn btn-outline-success btn-sm" onClick={() => pizzaDetails(pizza.id)}>Ver Más 👀</button>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => addToCart(pizza)}>Agregar 🛒</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

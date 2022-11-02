import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Pizzas from "../components/Pizzas";
import context from "../pizza_context.jsx";

const Pizza = ({id}) => {
    const pizzaId = useParams(id);
    const { pizzas } = useContext(context);
    const [ pizza, setPizza ] = useState({});

    const searchPizza = ({ id }) => {
        // eslint-disable-next-line array-callback-return
        pizzas.find((element) => {
            if (element.id === id) {
                console.log(element);
                setPizza(element);
            }
        });
    };

    useEffect (() => {
        searchPizza(pizzaId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <Pizzas pizza={pizza}></Pizzas>
        </div>

    )
}
export default Pizza;
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import formSchema from "../validation/formSchema";
import PizzaFormDetails from "./PizzaFormDetails";
import PizzaOrders from "./PizzaOrders";

const innitialPizza = {
  size: "",
  sauce: "",
  pepperoni: false,
  italian: false,
  meatball: false,
  mushrooms: false,
  roastedSpinach: false,
  redOnion: false,
  substitute: false,
  special: "Type here",
};

const initialError = {
  size: "",
  sauce: "",
  special: "",
};

const initialOrders = [];
const initiialBtn = true;

export default function PizzaForm() {
  //form
  const [pizza, setPizza] = useState(innitialPizza);
  //pizza orders
  const [pizzaOrders, setPizzaOrders] = useState(initialOrders);
  //post pizza orders
  const [postOrders, setPostOrders] = useState(initialOrders);
  // submit order button
  const [buttonIsDisabled, setButtonIsDisabled] = useState(initiialBtn);
  // form errors validation
  const [errors, setErrors] = useState(initialError);
  // server error
  const [serverError, setServerError] = useState("");
  //api link
  const apiLink = "https://reqres.in/api/users";

  // getting the pizza orders
  const getPizzaOrders = () => {
    axios
      .get(apiLink)
      .then((res) => {
        console.log(res.data.data);
        setPizzaOrders(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  //submiting pizza orders
  const postPizzaOrders = (newPizzaOrder) => {
    axios
      .post(apiLink, newPizzaOrder)
      .then((res) => {
        console.log(res.data);
        setPizzaOrders([res.data, ...pizzaOrders]);
      })
      .catch((err) => {
        return err;
      });
  };

  // onChange function
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setPizza({
      ...pizza,
      [name]: value,
    });
  };

  // onSubmit function
  const formSubmit = () => {
    const newPizzaOrder = {
      size: pizza.size,
      sauce: pizza.sauce,
      topping: [
        "pepperoni",
        "italian",
        "meatball",
        "mushrooms",
        "roastedSpinach",
        "redOnion",
      ].filter((tops) => pizza[tops]),
      substitute: false,
      special: pizza.special,
    };
    postPizzaOrders(newPizzaOrder);
    setPizza(innitialPizza);
  };

  useEffect(() => {
    getPizzaOrders();
  }, []);

  useEffect(() => {
    formSchema.isValid(pizza).then((valid) => {
      setButtonIsDisabled(!valid);
    });
  }, [pizza]);

  return (
    <div>
      <h1>Build Your Pizza</h1>
      <PizzaFormDetails
        formSubmit={formSubmit}
        pizza={pizza}
        inputChange={inputChange}
        errors={errors}
        buttonIsDisabled={buttonIsDisabled}
      />

      {/* {pizzaOrders.map((orders) => {
        return <PizzaOrders key={orders.special} details={orders} />;
      })} */}
    </div>
  );
}

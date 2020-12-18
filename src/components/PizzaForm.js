import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import formSchema from "../validation/formSchema";
import PizzaFormDetails from "./PizzaFormDetails";

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
        setPizzaOrders([res.data, ...pizzaOrders]);
        setPizza(innitialPizza);
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
  const formSubmit = () => {};

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
    </div>
  );
}

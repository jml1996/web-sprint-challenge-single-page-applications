import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";
import Form from "./Form";
import HomeOrders from "./HomeOrders";
import Validation from "./Validation";

import * as yup from "yup";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  olives: false,
  onions: false,
  peppers: false,
  instructions: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialDisabled = true;
const initialOrders = [];

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setOrders([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);


  // console.log(users);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues);
        console.log(orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const changeIt = (name, value) => {
    yup
      .reach(Validation, name)
      .validate(value)
      .then(() => {
        // console.log(value);
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({...formValues, [name]: value});
  };

  const submitIt = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["pepperoni", "olives", "onions", "peppers"].filter((top) => formValues[top]),
      instructions: formValues.instructions.trim(),
    }
    console.log(newOrder);
    postNewOrder(newOrder);
  };

  useEffect(() => {
    Validation.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <Switch>
        <Route path="/pizza">
          <nav>
            <ul>
              <Link to={"/pizza"} style={{ color: "black", textDecoration: 'none' }}>
                  <li>Place Order</li>
              </Link>
              <Link to={"/"} style={{ color: "black", textDecoration: 'none' }}>
                  <li>Home</li>
              </Link>
            </ul> 
          </nav>
          <Form
            values={formValues}
            change={changeIt}
            submit={submitIt}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <nav>
            <ul>
              <Link to={"/pizza"} style={{ color: "black", textDecoration: 'none' }}>
                  <li>Place Order</li>
              </Link>
              <Link to={"/"} style={{ color: "black", textDecoration: 'none' }}>
                  <li>Home</li>
              </Link>
            </ul> 
          </nav>
          <div className="hometext">
            <h2>Active Orders:</h2>
          </div>
          {
            orders.length === 0 ? <div className="none">None — select "Place Order" to place order.</div> : orders.map((order) => {
              console.log(order);
              return <HomeOrders key={order.id} details={order} />
            })
          }
        </Route>
      </Switch>
    </div>
  );
};

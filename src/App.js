import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/HomePage";
import PizzaForm from "./components/PizzaForm";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;

  .nav-links {
    /* padding: 0 2%; */
  }
  .nav-links a {
    text-decoration: none;
    /* padding: 5%; */
    font-size: 1.5rem;
  }
  .nav-links a:nth-child(1) {
    background: #94b4a4;
    color: #d2f5e3;
  }

  .nav-links a:nth-child(2) {
    background: #d2f5e3;
    color: #94b4a4;
  }
`;

const H1 = styled.h1`
  color: #94b4a4;
  font-size: 2rem;
`;

export default function App() {
  return (
    <div>
      <Nav>
        <H1>Lambda Eats</H1>
        <div className="nav-links">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/help" className="links">
            Help
          </Link>
        </div>
      </Nav>
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

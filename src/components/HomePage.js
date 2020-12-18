import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: pink;
  padding: 10% 2%;
`;

export default function HomePage() {
  const history = useHistory();
  const routeToPizzaForm = () => {
    history.push("/pizza");
  };
  return (
    <div>
      <Header>
        <h1>Get pizza while you code</h1>
        <button onClick={routeToPizzaForm}>Pizza</button>
      </Header>
    </div>
  );
}

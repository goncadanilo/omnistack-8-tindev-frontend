import React from "react";

import { Container } from "./styles";

import logo from "../../assets/logo.svg";

export default function Login() {
  return (
    <Container>
      <form>
        <img src={logo} alt="Tindev" />
        <input placeholder="Digite seu usuário no Github" />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

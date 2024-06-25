import React from "react";
import { Container, LoginContainer, TitleContainer } from "./style.ts";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";


const Login = () => {

  return (
    <Container>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon" width={500}/>
          <LoginContainer>
            <img src="" alt="" />
            <TitleContainer>
              <p>Login</p>
            </TitleContainer>
            <Input label={"Email"} id={"iemail"} placeholder="Email" />
            <Input label={"Senha"} id={"isenha"} placeholder="Senha" />
            <Button title={'Login'} />
          </LoginContainer>
    </Container>
  )
}
export default Login
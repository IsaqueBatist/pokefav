import React from "react";
import { Container, LoginContainer, TitleContainer } from "./style.ts";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";


const Login = () => {

  return (
    <Container>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon" width={500}/>
          <LoginContainer>
            <img src="https://media.discordapp.net/attachments/1230526550969942067/1255246736637825094/logofodastica.png?ex=667c6f1f&is=667b1d9f&hm=e2b960fe390ef3649faa5adbcf7e6790480f9ddba8cb01fb55e2a1c0244ea459&=&format=webp&quality=lossless&width=528&height=256" alt="icon" width={300} />
            <TitleContainer>
              <p>Login</p>
            </TitleContainer>
            <Input label={"Email"} id={"iemail"} placeholder="Email" type="email" required/>
            <Input label={"Senha"} id={"isenha"} placeholder="Senha" type="password" required/>
            <Button title={'Login'} />
          </LoginContainer>
    </Container>
  )
}
export default Login
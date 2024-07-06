import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
//API
import { api, db } from "../../services/api.ts";
//Hooks
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//Componentes
import { Container, LoginContainer, TitleContainer, Row, FormContainer, Footer } from "./style.ts";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";
//Tipos
import { ILoginData } from "./type.ts";
import Icone from "../../assets/images/logofodastica.png"

const schema = yup.object({
  email: yup.string().email("Email não é valido").required('Campo Obrigatório'),
  senha: yup.string().min(6, 'No minimo 6 caracteres').required('Campo Obrigatório')
})

const Login = () => {

  const [image, setImage] = useState("")
  const [pokemonName, setPokemonName] = useState<string>("")

  const navigate = useNavigate()
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({ resolver: yupResolver(schema), mode: 'onBlur', reValidateMode: 'onChange' })

  async function getpokemon(): Promise<void> {
    try {
      const randonIndex: number = Math.floor(Math.random() * 1025)
      const data = await api.get(`/api/v2/pokemon/${randonIndex}`)
      setImage(data.data.sprites.other.dream_world.front_default ? data.data.sprites.other.dream_world.front_default : data.data.sprites.other["official-artwork"].front_default)
      setPokemonName(data.data.name)
    } catch (error) {
      console.error(error)
    }
  }
  const onSubmit = async (loginData: ILoginData) => {
    try {
      const { data } = await db.get(`/users?email=${loginData.email}&senha=${loginData.senha}`)
      if (data.length === 1) {
        localStorage.setItem('userInfo', JSON.stringify(data[0]))
        navigate('/home')
        window.alert("Usuário Logado com Sucesso")
      } else {
        window.alert("Usuário não encontrado")
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getpokemon()
  }, [])


  return (
    <Container>
      <img src={image} alt="pokemon" title={pokemonName} width={400} id="pokemon" />
      <LoginContainer>
        <img src={Icone} alt="icon" width={300} />
        <Row>
          <TitleContainer>
            <p>Login</p>
          </TitleContainer>
        </Row>
        <Row>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)} >
              <Input name="email" control={control} errorMessage={errors?.email?.message} label={"Email"} id={"iemail"} placeholder="Email" type="email" autoComplete="off" required />
              <Input name="senha" control={control} errorMessage={errors?.senha?.message} label={"Senha"} id={"isenha"} placeholder="Senha" type="password" autoComplete="off" required />
              <Button title={'Login'} disabled={!isValid} type="submit" />
            </form>
          </FormContainer>
        </Row>
        <Row>
          <Footer>
            <a href="/cadastro">Cadastrar</a>
          </Footer>
        </Row>
      </LoginContainer>
    </Container>
  )
}
export default Login
import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";
import { Container, LoginContainer, TitleContainer, Row, FormContainer, Footer } from "./style.ts";
import { api, db } from "../../services/api.ts";
import { IAPI } from "../../type.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { IUser, IRegisterData } from "../login/type.ts";
import { useNavigate } from "react-router-dom";
import Icone from "../../assets/images/logofodastica.png"


const schema = yup.object({
  nome: yup.string().required('Campo Obrigatório').min(4, 'No minimo 4 caracteres'),
  email: yup.string().email("Email não é valido").required('Campo Obrigatório'),
  senha: yup.string().min(6, 'No minimo 6 caracteres').required('Campo Obrigatório')
})

const Cadastro = () => {
  const [image, setImage] = useState<string>("")
  const [pokemonName, setpokemonName] = useState<string>("")

  const navigte = useNavigate()
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({ resolver: yupResolver(schema), mode: 'onBlur', reValidateMode: 'onChange' })

  async function getpokemon(): Promise<void> {
    try {
      const randonIndex: number = Math.floor(Math.random() * 1025)
      const data = await api.get(`/api/v2/pokemon/${randonIndex}`)
      setImage(data.data.sprites.other.dream_world.front_default ? data.data.sprites.other.dream_world.front_default : data.data.sprites.other["official-artwork"].front_default)
      setpokemonName(data.data.name)
    } catch (error) {
      console.error(error)
    }
  }
  const onSubmit = async (registerData: IRegisterData) => {
    try {
      const { data } = await db.get(`/users?email=${registerData.email}&senha=${registerData.senha}`)
      if (data.length === 1) return alert("Usuario já existe")
      const response = await db.get('/users')
      const users: IUser[] = response.data
      const { id } = users[users.length - 1]
      const maxid: number = Number(id)
      const newID = maxid + 1
      const newUser: IUser = {
        id: newID.toString(),
        nome: registerData.nome,
        email: registerData.email,
        senha: registerData.senha,
        favpokemons: []
      }
      await db.post('/users', newUser)
      navigte("/")
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
            <p>Cadastro</p>
          </TitleContainer>
        </Row>
        <Row>
          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="nome" control={control} errorMessage={errors?.nome?.message} label={"Nome"} id={"inome"} placeholder="Nome" type="text" autoComplete="off" required />
              <Input name="email" control={control} errorMessage={errors?.email?.message} label={"Email"} id={"iemail"} placeholder="Email" type="email" autoComplete="off" required />
              <Input name="senha" control={control} errorMessage={errors?.senha?.message} label={"Senha"} id={"isenha"} placeholder="Senha" type="password" autoComplete="off" required />
              <Button title={'Cadastrar'} disabled={!isValid} />
            </form>
          </FormContainer>
        </Row>
        <Row>
          <Footer>
            <a href="/">Logar</a>
          </Footer>
        </Row>
      </LoginContainer>
    </Container>
  )
}
export default Cadastro
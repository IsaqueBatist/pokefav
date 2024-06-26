import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";
import { Container, LoginContainer, TitleContainer, Row, FormContainer } from "./style.ts";
import { api } from "../../services/api.ts";
import { IAPI } from "../../type.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object({
  email: yup.string().email("Email não é valido").required('Campo Obrigatório'),
  senha: yup.string().min(6, 'No minimo 6 caracteres').required('Campo Obrigatório')
})

const Login = () => {

  const [ListaPokemos, setListaPokemos] = useState<IAPI[]>([])
  const [urls, setUrls] = useState<string[]>([])
  const [image, setImage] = useState("")

  const { control, formState: { errors, isValid } } = useForm({ resolver: yupResolver(schema), mode: 'onBlur', reValidateMode: 'onChange' })

  console.log(isValid)
  async function getList(): Promise<void> {
    try {
      const data = await api.get(`/api/v2/pokemon?offset=40&limit=40`)
      const ListaPokemon: IAPI[] = data.data.results
      setListaPokemos(ListaPokemon)
      const extractUrl = ListaPokemos.map(element => element.url)
      setUrls(extractUrl)
    } catch (error) {
      console.log('Deu ruim')
      console.error(error)
    }
  }
  async function getUrls() {
    const extractUrl = ListaPokemos.map(element => element.url)
    setUrls(extractUrl)
  }
  async function getImagens(): Promise<void> {
    if (urls.length === 0) return;
    const randonIndex: number = Math.floor(Math.random() * urls.length)
    const url: string = urls[randonIndex]

    try {
      const data = await axios.get(url)
      setImage(data.data.sprites.other.dream_world.front_default)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getList()
  }, [])
  useEffect(() => {
    getUrls()
  }, [ListaPokemos])
  useEffect(() => {
    getImagens()
  }, [urls])
  return (
    <Container>
      <img src={image} alt="pokemon" width={400} id="pokemon" />
      <LoginContainer>
        <img src="https://media.discordapp.net/attachments/1230526550969942067/1255246736637825094/logofodastica.png?ex=667c6f1f&is=667b1d9f&hm=e2b960fe390ef3649faa5adbcf7e6790480f9ddba8cb01fb55e2a1c0244ea459&=&format=webp&quality=lossless&width=528&height=256" alt="icon" width={300} />
        <Row>
          <TitleContainer>
            <p>Login</p>
          </TitleContainer>
        </Row>
        <Row>
          <FormContainer>
            <form>
              <Input name="email" control={control} errorMessage={errors?.email?.message} label={"Email"} id={"iemail"} placeholder="Email" type="email" required />
              <Input name="senha" control={control} errorMessage={errors?.senha?.message} label={"Senha"} id={"isenha"} placeholder="Senha" type="password" required />
              <Button title={'Login'} disabled={!isValid} />
            </form>
          </FormContainer>
        </Row>
      </LoginContainer>
    </Container>
  )
}
export default Login
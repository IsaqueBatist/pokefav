import React, { useEffect, useState } from "react";
import { Container, LoginContainer, TitleContainer } from "./style.ts";
import Input from "../../components/input/index.tsx";
import Button from "../../components/button/index.tsx";
import { api } from "../../services/api.ts";
import { IAPI } from "../../type.ts";
import axios from "axios";

const Login = () => {

  const [ListaPokemos, setListaPokemos] = useState<IAPI[]>([])
  const [urls, setUrls] = useState<string[]>([])
  const [image, setImage] = useState("")

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
      <img src={image} alt="pokemon" width={400} />
      <LoginContainer>
        <img src="" alt="icon" width={300} />
        <TitleContainer>
          <p>Login</p>
        </TitleContainer>
        <Input label={"Email"} id={"iemail"} placeholder="Email" type="email" required />
        <Input label={"Senha"} id={"isenha"} placeholder="Senha" type="password" required />
        <Button title={'Login'} />
      </LoginContainer>
    </Container>
  )
}
export default Login
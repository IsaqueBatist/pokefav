import styled from "styled-components";
import { getColor } from "../../components/tipo/style.ts";
import { ContainerTypeProps } from "../../components/tipo/type.ts";


export const PokemonsContainer = styled.div`
  display: flex;
  flex-drection: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10rem;
  background-color: #ffffff;
  width: 100%
  height: 100%;
`
export const PokemonCardContainer = styled.div`
  display:flex;
  flex-direction: column;
  background-color:white;
  border-radius: 1.5rem;
  margin: 1rem 0 1rem 1rem;
  width:25rem;
  height: 30rem;
  overflow: hidden;
  border: .1rem solid black;
`

export const PokemonImageContainer = styled.div<ContainerTypeProps>`
  display:flex;
  flex-direction: column;
  background-color: ${({ tipo }) => getColor(tipo)};
  align-items: center;
  width: 100%;
  height: 70%;
  background-image: url("${({ image }) => image}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  img{
  margin: .1rem;
  }
`
export const PokeName = styled.div`
  display:flex;
  align-items: center;
  width: 100%;
  height:3rem;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
  p{
    font-size: 2rem;
    margin: 1rem 0 0 1rem;
    span{
      color: green;
      font-weight: bolder;
      font-size: 2rem;
    }
  }
`

export const PokeTypeandStart = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const PokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  row-gap: 1rem;
  background-color: white;
  width:100%;
  height: 100%;
`

export const PokemonItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowwrap;
  align-items: center;
  p{
    font-size: 2rem;
  }
  div{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .segundoItem{
    margin-left: 2rem;
  }
  
`
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
  button{
    padding: 2rem;
    width: 30rem;
    border-radius: 2rem;
    color: white;
    font-size: 2rem;
    background-color: black;
    font-weight: 700;

    &:hover{
      cursor: pointer;
      background-color: #00000090
    }
  }
`
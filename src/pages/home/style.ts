import styled from "styled-components";
import { getColor } from "../../components/tipo/style.ts";

export const PokemonsContainer = styled.div`
  display: flex;
  flex-drection: row;
  flex-wrap: wrap;
  margin-top: 10rem;
  background-color: red;
  width: 100%
  height: 100%;
`
export const PokemonCardContainer = styled.div`
  display:flex;
  flex-direction: column;
  background-color:white;
  border-radius: 1.5rem;
  margin-left: 1rem;
  width:30rem;
  height: 43rem;
  overflow: hidden;
  border: .1rem solid black;
`

export const PokemonImageContainer = styled.div<ContainerTypeProps>`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 65%;
  background-color: ${({tipo}) => getColor(tipo)};
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
  justify-content: flex-end;
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
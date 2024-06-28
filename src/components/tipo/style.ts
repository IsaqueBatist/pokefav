import styled from "styled-components";
import { ContainerTypeProps } from "./type";

export const getColor = (tipo:string) => {
  switch(tipo){
    case 'grass':
      return '#63BB5B'
    case 'poison':
      return '#B567CE'
    case 'fire':
      return '#FF9C54'
    case 'water':
      return '#3692DC'
    case 'electric':
      return '#FBD100'
    case 'ice':
      return '#4CD1C0'
    case 'fighting':
      return '#E0306A'
    case 'ground':
      return '#E87236'
    case 'flying':
      return '#8FA8DD'
    case 'psychic':
      return '#FF6675'
    case 'bug':
      return '#90C12C'
    case 'rock':
      return '#C8B686'
    case 'ghost':
      return '#5269AC'
    case 'dragon':
      return '#0A6DC4'
    case 'dark':
      return '#5B5466'
    case 'steel':
      return '#5A8EA2'
    case 'fairy':
      return '#FB89EB'
    case 'normal':
      return '#9FA19F'
  }
}
export const ContainerType = styled.div<ContainerTypeProps>`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2.5rem;
  background-color: ${({tipo}) => getColor(tipo)};
  border-radius: 1rem;
  color: white;
  margin: .2rem 0 0 .2rem;
  font-size: 1.2rem;
  font-weight: 700;
`
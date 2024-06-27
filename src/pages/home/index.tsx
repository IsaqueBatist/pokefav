import React from "react";
import Header from "../../components/navbar/index.tsx";
import { PokemonCardContainer, PokemonsContainer, PokemonImageContainer, PokeName, PokeTypeandStart, PokemonDetails, PokemonItem } from "./style.ts";
import Type from "../../components/tipo/index.tsx";


const HomePage = () => {

  return (
    <>
      <Header />
      <PokemonsContainer>
        <PokemonCardContainer>
          <PokemonImageContainer tipo="grass">
            <PokeName>
              <p>Gardevoir <span>68</span></p>
            </PokeName>
            <PokeTypeandStart>
              <img src="https://cdn.discordapp.com/attachments/1230526550969942067/1255947972727017645/image.png?ex=667efc33&is=667daab3&hm=7044d5a33abf46229e232e504f88b0ed6519d8b353bd299789fd0c63838692d2&" alt="type" width={50}/>
            </PokeTypeandStart>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/282.svg" alt="pokemon" width={170} />
          </PokemonImageContainer>
          <PokemonDetails>
            <PokemonItem>
              <p>Tipo:</p>
              <div>
                <Type tipo={'grass'}/>
                <Type tipo={'electric'}/>
                <Type tipo={'fire'}/>
              </div>
            </PokemonItem>
            <PokemonItem>
              <p>Defesa:</p>
              <p className="segundoItem">100</p>
            </PokemonItem>
            <PokemonItem>
              <p>Ataque:</p>
              <p className="segundoItem">83</p>
            </PokemonItem>
            <PokemonItem>
              <p>Velocidade:</p>
              <p className="segundoItem">78</p>
            </PokemonItem>
          </PokemonDetails>
        </PokemonCardContainer>
      </PokemonsContainer>
    </>
  )
}

export default HomePage
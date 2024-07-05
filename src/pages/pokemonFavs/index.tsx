import React, { useEffect, useState } from "react";
import Header from "../../components/Header/index.tsx";
import { PokeName, PokeTypeandStart, PokemonCardContainer, PokemonDetails, PokemonImageContainer, PokemonItem, PokemonsContainer } from "../home/style.ts";
import Type from "../../components/tipo/index.tsx";
import { grass, poison, fire, water, electric, ice, fighting, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy, normal } from "../../imagens.ts";
import { IUser } from "../login/type.ts";
import { IHead } from "../../type.ts";
import { api } from "../../services/api.ts";
import { NothingHer } from "./style.ts";

export const PokemonFavs = () => {
  const [favPokemons, setFavPokemons] = useState<string[]>([])
  const [user, setUser] = useState<IUser>({} as IUser)
  const [pokemonsFavDetails, setPokemonsFavDetails] = useState<any[]>([])

  const getPokemonsFavDetails = async (favPokemon: string) => {
    try {
      const { data } = await api.get(`/api/v2/pokemon/${favPokemon}`)
      setPokemonsFavDetails(prevPoke => [...prevPoke, data])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('userInfo')
    if (data) {
      try {
        setUser(JSON.parse(data))
      } catch (error) {
        console.error(error)
      }
    }
  }, [])
  useEffect(() => {
    setFavPokemons(user.favpokemons || [])
  }, [user])
  useEffect(() => {
    favPokemons.map((pokemon) => getPokemonsFavDetails(pokemon))
  }, [favPokemons])
  return (
    <>
      <Header />
      <PokemonsContainer>
        { pokemonsFavDetails?
          pokemonsFavDetails.map((element) => {
            const { base_stat } = element.stats[0]
            const types: string[] = element.types.map(types => types.type.name)
            const stats = element.stats.filter(stat => stat.stat.name === "attack" || stat.stat.name === "defense" || stat.stat.name === "speed").map(stat => ({
              name: stat.stat.name,
              stats: stat.base_stat
            }))
            const pokemonImage = element.sprites.other.dream_world.front_default ? element.sprites.other.dream_world.front_default : element.sprites.other["official-artwork"].front_default
            const getTypeImagem = (firstType: string) => {
              switch (firstType) {
                case 'grass':
                  return grass
                case 'poison':
                  return poison
                case 'fire':
                  return fire
                case 'water':
                  return water
                case 'electric':
                  return electric
                case 'ice':
                  return ice
                case 'fighting':
                  return fighting
                case 'ground':
                  return ground
                case 'flying':
                  return flying
                case 'psychic':
                  return psychic
                case 'bug':
                  return bug
                case 'rock':
                  return rock
                case 'ghost':
                  return ghost
                case 'dragon':
                  return dragon
                case 'dark':
                  return dark
                case 'steel':
                  return steel
                case 'fairy':
                  return fairy
                case 'normal':
                  return normal
              }
            }

            return (
              
              <PokemonCardContainer key={element.name}>
                <PokeName>
                  <p>{element.name} <span>{base_stat}</span></p>
                </PokeName>
                <PokemonImageContainer tipo={types[0]} image={pokemonImage}>
                  <PokeTypeandStart>
                    <img src={getTypeImagem(types[0])} alt="type" width={50} />
                  </PokeTypeandStart>
                </PokemonImageContainer>
                <PokemonDetails>
                  <PokemonItem>
                    <p>Tipo:</p>
                    <div>
                      {types.map(type => <Type key={type} tipo={type} />)}
                    </div>
                  </PokemonItem>
                  {stats.map(status =>
                    <PokemonItem key={status.name}>
                      <p>{status.name}:</p>
                      <p className="segundoItem">{status.stats}</p>
                    </PokemonItem>
                  )}
                </PokemonDetails>
              </PokemonCardContainer>
            )
          })
        : null}
      </PokemonsContainer>
    </>
  )
}
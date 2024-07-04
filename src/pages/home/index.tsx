import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header/index.tsx";
import { PokemonCardContainer, PokemonsContainer, PokemonImageContainer, PokeName, PokeTypeandStart, PokemonDetails, PokemonItem, ButtonContainer } from "./style.ts";
import Type from "../../components/tipo/index.tsx";
import { api, db } from "../../services/api.ts";
import { IAPI, IData, IHead } from "../../type.ts";
import { stat } from "fs";
import {
  bug, dark, dragon, electric, fairy, fighting, fire, flying, ground, ghost, grass, ice, normal, poison, psychic, rock, steel, water,
} from "../../imagens.ts"
import { IUser } from "../login/type.ts";
import { userInfo } from "os";


const HomePage = () => {
  const [pokemons, setPokemons] = useState<IAPI[]>([])
  const [pokemonsDetails, setPokemonsDetails] = useState<any[]>([])
  const [offset, setOffset] = useState<number>(0)
  const [user, setUser] = useState<IUser>({} as IUser)
  const [favPokemons, setFavPokemons] = useState<string[]>([])


  const loadPokemons = async (offset: number = 0) => {
    try {
      const { data }: IData = await api.get(`/api/v2/pokemon?offset=${offset}&limit=20`)
      setPokemons(data.results)
      await loadPokemonsDetails(data.results)
      setOffset(offset += 20)
    } catch (error) {
      console.error(error);
    }
  }
  const getPokemonDetails = async (pokemonName: string) => {
    try {
      const response = await api.get(`/api/v2/pokemon/${pokemonName}`)
      const poke: IHead = response.data
      setPokemonsDetails(prevDetails => [...prevDetails, poke])
    } catch (error) {
      console.error(error)
    }
  }
  const loadPokemonsDetails = async (pokemonList) => {
    try {
      const promises = pokemonList.map(pokemon => getPokemonDetails(pokemon.name))
      await Promise.all(promises)
    } catch (error) {
      console.error(error)
    }
  }
  const loadMorePokemons = () => {
    loadPokemons(offset)
  }
  const getfavPokemons = useCallback(async (pokemon, checked: boolean) => {
    if (checked) {
      setFavPokemons(prevFav => [...prevFav, pokemon.name])

      await db.put(`/users/${user.id}`, {
        ...user,
        favpokemons: [...favPokemons, pokemon.name]
      })
    } else {
      setFavPokemons(prevFav => prevFav.filter(fav => fav !== pokemon.name))
      await db.put(`/users/${user.id}`, {
        ...user,
        favpokemons: favPokemons.filter(fav => fav !== pokemon.name)
      })
    }
    setUser({
      ...user,
      favpokemons: [...favPokemons, pokemon.name]
    })
    localStorage.setItem('userInfo', JSON.stringify({
      ...user,
      favpokemons: [...favPokemons, pokemon.name]
    }))
  }, [favPokemons, user])



  useEffect(() => {
    const getDATA = async () => {
      const userInfo = localStorage.getItem('userInfo')
      if(userInfo){
        try {
          const data: IUser = JSON.parse(userInfo)
          setUser(data)
          setFavPokemons(data.favpokemons || [])
        } catch (error) {
          console.error(error)
        }
      }
    }
    getDATA()
    loadPokemons()
  }, [])
  useEffect(() => {
    console.log(`User setado na inicialização:`)
    console.log(user)
  }, [user])
  return (
    <>
      <Header />
      <PokemonsContainer>
        {
          pokemonsDetails.map((element) => {
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
                    <input type="checkbox" onChange={(e) => getfavPokemons(element, e.target.checked)}
                      checked={user.favpokemons?.some(fav => fav === element.name)}
                    />

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
        }
      </PokemonsContainer>
      <ButtonContainer>
        <button onClick={loadMorePokemons}>
          Carregar mais
        </button>
      </ButtonContainer>
    </>
  )
}

export default HomePage
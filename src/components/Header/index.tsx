import React, { useEffect, useState } from "react";
import { HeaderContainer, NavbarContainer } from "./style.ts";
import UserInfo from "../UserInfo/index.tsx";
import { ILoginData, IUser } from "../../pages/login/type.ts";
import { IUserInfo } from "../UserInfo/types.ts";
import { db } from "../../services/api.ts";
import pokemonIco from "../../assets/images/pokefav.jpeg"
import { Link } from "react-router-dom";



const Header = () => {

  const [user, setUser] = useState<IUser>({} as IUser)

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if(userInfo){
      try{
          const parseUserInfo = JSON.parse(userInfo)
          setUser(parseUserInfo)
      }catch (error){
        console.error(error)
      }
    }
  }, [])
  return (
    <HeaderContainer>
      <img src={pokemonIco} alt="pokefav" width={100} />
      <NavbarContainer>
        <Link className="lik" to="/home">Home</Link>
        <Link className="lik" to="/fav">Favoritos</Link>
      </NavbarContainer>
      <UserInfo  email={user.email} id={user.id} name={user.nome} />
    </HeaderContainer>
  )
}
export default Header
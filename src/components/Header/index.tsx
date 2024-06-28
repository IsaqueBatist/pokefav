import React, { useEffect, useState } from "react";
import { HeaderContainer, NavbarContainer } from "./style.ts";
import UserInfo from "../UserInfo/index.tsx";
import { ILoginData, IUser } from "../../pages/login/type.ts";
import { IUserInfo } from "../UserInfo/types.ts";
import { db } from "../../services/api.ts";



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
      <img src="https://media.discordapp.net/attachments/1230526550969942067/1255246736637825094/logofodastica.png?ex=6680639f&is=667f121f&hm=2ce35817bbf553cf9dc2f8c65f0940d40928a7617156aca393b1a2be3971df04&=&format=webp&quality=lossless&width=528&height=256" alt="pokefav" width={100} />
      <NavbarContainer>
        <p>Home</p>
        <p>Favoritos</p>
      </NavbarContainer>
      <UserInfo email={user.email} id={user.id} name={user.nome} />
    </HeaderContainer>
  )
}
export default Header
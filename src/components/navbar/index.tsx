import React from "react";
import { HeaderContainer, ImageContainer, UserInfo, NavbarContainer } from "./style.ts";
import pokefavicon from "../../assets/images/pokefav.jpeg"

const header = () => {

  return (
    <HeaderContainer>
      <img src={pokefavicon} alt="pokefav" width={100} />
      <NavbarContainer>
        <p>Home</p>
        <p>Favoritos</p>
      </NavbarContainer>
      <UserInfo>
        <ImageContainer>
          <img src="https://i.pinimg.com/originals/97/1d/bf/971dbf5a9b4249aa231c6993774a89ab.png" alt="userprofile" width={50}/>
        </ImageContainer>
        <p>Biatrizzzzz</p>
      </UserInfo>
    </HeaderContainer>
  )
}
export default header
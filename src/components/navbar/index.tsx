import React from "react";
import { HeaderContainer, ImageContainer, UserInfo, NavbarContainer } from "./style.ts";

const header = () => {

  return (
    <HeaderContainer>
      <img src="https://media.discordapp.net/attachments/1230526550969942067/1255246736637825094/logofodastica.png?ex=667e695f&is=667d17df&hm=d105b2973617643d77f3de2b45666da3b9d4ed8b5d8ce6105c6892f54c23e7eb&=&format=webp&quality=lossless&width=528&height=256" alt="pokefav" width={100} />
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
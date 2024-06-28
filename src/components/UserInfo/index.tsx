import React from "react";
import { IUserInfo } from "./types";
import { ImageContainer, UserInfoCotnainer, InfoContainer } from "./style.ts";
import { useNavigate } from "react-router-dom";

const UserInfo = ({email, id, name,picture}:IUserInfo) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <UserInfoCotnainer>
      <ImageContainer>
        <img src={picture? picture : "https://i.pinimg.com/originals/97/1d/bf/971dbf5a9b4249aa231c6993774a89ab.png"} alt="userprofile" width={50}/>
      </ImageContainer>
      <InfoContainer>
        <p>{name}</p>
        <button onClick={handleLogout}>
          Log out
        </button>
      </InfoContainer>
    </UserInfoCotnainer>
  )
}

export default UserInfo
import React from "react";
import { ButtonContainer } from "./style.ts";
import { IButton } from "./type.ts";

const Button = ({title, onClick} : IButton) => {

  return (
    <ButtonContainer onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export default Button
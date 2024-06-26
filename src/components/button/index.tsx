import React from "react";
import { ButtonContainer } from "./style.ts";
import { IButton } from "./type.ts";

const Button = ({ title, onClick, disabled }: IButton) => {

  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {title}
    </ButtonContainer>
  )
}

export default Button
import React from "react";
import { InputContainer, InputText } from "./style.ts";

const Input = ({label, id, placeholder} : Iinput) => {
  return (
    <>
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <InputText id={id} placeholder={placeholder} />
    </InputContainer>
    </>
  )
}

export default Input
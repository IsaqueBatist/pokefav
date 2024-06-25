import React from "react";
import { InputContainer, InputText } from "./style.ts";
import { Iinput } from "./types.ts";

const Input = ({ label, id, placeholder, type, required}:Iinput) => {
  return (
    <>
      <InputContainer>
        {label ? <label htmlFor={id}>{label}{required ? " *" : null}</label>: null}
        <InputText id={id} placeholder={placeholder} type={type} />
      </InputContainer>
    </>
  )
}

export default Input
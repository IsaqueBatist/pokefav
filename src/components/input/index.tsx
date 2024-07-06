import React from "react";
import { InputContainer, InputText, ErrorText } from "./style.ts";
import { Iinput } from "./types.ts";
import { Controller } from "react-hook-form";

const Input = ({ label, id, placeholder, type, required, name, control, errorMessage, ...rest }: Iinput) => {
  return (
    <>
      <InputContainer>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              {label ? <label htmlFor={id}>{label}{required ? " *" : null}</label> : null}
              <InputText {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref} type={type} />
            </>
          )}
        />
        {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </InputContainer>
    </>
  )
}

export default Input
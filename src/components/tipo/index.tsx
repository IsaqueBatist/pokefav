import React from "react";
import { ContainerType } from "./style.ts";


const Type = ({ tipo }) => {

  return (
    <ContainerType tipo={tipo}>
      {tipo}
    </ContainerType>
  )
}

export default Type
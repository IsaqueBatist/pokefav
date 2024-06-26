import styled from "styled-components";

export const InputContainer = styled.div`
  width: 50rem;  
  max-width: 27.5rem;
  heigh: 3rem;
  row-gap: .5rem;
  
  color:white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  label {
  font-size: 1.5rem;
  font-weight: 500;
  }
`
export const InputText = styled.input`
  background: white;
  width: 100%;
  color: white;
  border: 0;
  height: 30px;
  border: 1px solid black;
  border-radius: 1rem;
  color: black;
  padding: .5rem;

  &:focus{
    outline: none;
  }
`

export const ErrorText = styled.div`
  color: #FF0000;
  font-size: 1.2rem;
  margin: 0;
`
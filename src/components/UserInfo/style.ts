import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 5rem;
  justify-self: flex-end;
  height: 5rem;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`

export const UserInfoCotnainer = styled.div`
  justify-self: flex-end;
  display:flex;
  flex-direction: row;
  color:white;
  align-items: center;
  margin-right: 1rem;
  align-self: center;
`

export const InfoContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size: 2rem;
  }
  button{
    background-color: white;
    width: 5rem;
    padding: .3rem;
    border-radius: 1rem;
    &:hover{
      cursor: pointer;
      background-color: #f1f1f1f1;
    }
  }
`
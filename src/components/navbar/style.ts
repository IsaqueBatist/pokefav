import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: black;
`

export const ImageContainer = styled.div`
  width: 5rem;
  justify-self: flex-end;
  height: 5rem;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`

export const UserInfo = styled.div`
  justify-self: flex-end;
  display:flex;
  flex-direction: row;
  color:white;
  align-items: center;
  margin-right: 1rem;
  align-self: center;
  p{
    margin-left: .5rem;
    font-size: 1.4rem;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  color:white;
  flex-direction: row;
  justify-self: center;
  align-self: center;

  p{
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }
`
import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
  align-items: center;
  justify-content: space-evenly;
`
export const LoginContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 60rem;
  padding: .5rem;
  border-radius: 10px;
  background: rgb(158,24,206);
  background: linear-gradient(99deg, rgba(158,24,206,1) 0%, rgba(80,12,104,1) 100%);
`
export const TitleContainer = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  p {
    font-weight: bold;
    font-size: 5.4rem;
  }
`

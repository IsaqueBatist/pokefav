import styled from "styled-components"

export const Container = styled.main`
  text-align: center; 
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;
  
  #pokemon{
    filter: drop-shadow(0px 10px 10px #00000038);
  }
  `
export const Row = styled.div`
  width: 100%;
`
export const LoginContainer = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  height: 60rem;
  padding: .5rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 20px 4px #00000038;
  background: linear-gradient(99deg, rgba(158,24,206,1) 0%, rgba(80,12,104,1) 100%);

  img{
    margin-top: 1rem;
  }
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const TitleContainer = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  p {
    font-weight: bold;
    font-size: 4.4rem;
  }
`

export interface IRegisterData {
  nome: string
  email: string
  senha: string
}
export interface ILoginData {
  email: string
  senha: string
}

export interface IUser {
  id: string
  nome: string
  email: string
  senha: string
  favpokemons?: string[]
  picture?: File | null
}
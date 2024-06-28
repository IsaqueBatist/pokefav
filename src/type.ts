export interface IAPI {
  name: string
  url: string
}

export interface IHead{
  count: number
  next: string | null
  previous: string | null
  results: IAPI[]
}
export interface IData{
  data: IHead
}
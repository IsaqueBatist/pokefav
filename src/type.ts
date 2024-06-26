export interface IAPI {
  nane: string
  url: string
}

export interface IHead{
  count: number
  next: string
  previous: null
  result: IAPI[]
}
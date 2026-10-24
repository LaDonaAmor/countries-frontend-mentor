export type Currency = {
  code: string
  name: string
  symbol: string
}

export type Language = {
  name: string
}

export type Country = {
  name: string
  nativeName: string
  capital?: string | null
  region: string
  subregion: string
  population: number
  topLevelDomain: string[]
  currencies?: Currency[] | null
  languages: Language[]
  borders?: string[] | null
  alpha3Code: string
  flags: {
    svg: string
    png: string
  }
}

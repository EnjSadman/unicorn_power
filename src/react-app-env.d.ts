/// <reference types="react-scripts" />
export interface HeroType {
  title: string,
  description: string,
}

export interface AboutType {
  text: string,
  list: List,
}

export interface List {
  title: string,
  elements: string[],
}

export interface CardType {
  id: number,
  img: string,
  name: string,
  services: string[],
  price: number,
}

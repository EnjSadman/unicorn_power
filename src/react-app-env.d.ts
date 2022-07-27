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

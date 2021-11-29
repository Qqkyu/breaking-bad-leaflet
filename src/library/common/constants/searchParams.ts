export enum SearchParamsType {
  Character = "Character",
  Death = "Death",
  Episode = "Episode",
  Quote = "Quote",
}

export const AvailableTypes = Object.values(SearchParamsType).filter((value) => typeof value === "string") as string[];

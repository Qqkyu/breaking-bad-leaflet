import { character } from "library/common/components/Main/Character/character";
import { episode } from "library/common/components/Main/Episode/episode";
import { death } from "library/common/components/Main/Death/death";
import { quote } from "library/common/components/Main/Quote/quote";
import { SearchParamsType } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";

export function isEmpty(arr: any[]) {
  return arr.length === 0;
}

export function mapArray(entries: (string | number)[]) {
  const mappedArray: string[] = [];
  if (entries?.length) {
    mappedArray.push(entries[0].toString());
  }
  for (let i = 1; i < entries.length; ++i) {
    mappedArray.push(", " + entries[i]);
  }
  return mappedArray;
}

export function filterObjects(type: SearchParamsType, objects: objects[], filter: string) {
  filter = filter.trim().toLowerCase();
  if (filter.length === 0) {
    return objects;
  }
  switch (type) {
    case SearchParamsType.Character:
      const characters = objects as character[];
      return characters.filter((character) => character.name.toLowerCase().includes(filter));
    case SearchParamsType.Death:
      const deaths = objects as death[];
      return deaths.filter((death) => death.death.toLowerCase().includes(filter));
    case SearchParamsType.Episode:
      const episodes = objects as episode[];
      return episodes.filter((episode) => episode.title.toLowerCase().includes(filter));
    case SearchParamsType.Quote:
      const quotes = objects as quote[];
      return quotes.filter((quote) => quote.quote.toLowerCase().includes(filter));
  }
}

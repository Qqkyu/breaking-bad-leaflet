import { character } from "library/common/components/Character/character";
import { death } from "library/common/components/Death/death";
import { episode } from "library/common/components/Episode/episode";
import { quote } from "library/common/components/Quote/quote";

interface IBreakingBadApi {
  getAllCharacters: () => character[];
  getAllDeaths: () => death[];
  getAllEpisodes: () => episode[];
  getAllQuotes: () => quote[];

  getRandomCharacter: () => character;
  getRandomQuote: () => quote;
  getRandomDeath: () => death;
}

/* todo:
export class BreakingBadAPI implements IBreakingBadApi {
  
}
*/

import { quote } from "library/common/components/Main/Quote/quote";

export enum QuotesActionTypes {
  SET_QUOTES = "SET_QUOTES",
  SET_RANDOM_QUOTE = "SET_RANDOM_QUOTE",
}

export function setQuotes(quotes: quote[]) {
  return {
    type: QuotesActionTypes.SET_QUOTES,
    payload: quotes,
  };
}

export function setRandomQuote(quote: quote) {
  return {
    type: QuotesActionTypes.SET_RANDOM_QUOTE,
    payload: quote,
  };
}

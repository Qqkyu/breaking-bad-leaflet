import { quote } from "library/common/components/Quote/quote";
import { apiMainPath, apiPaths } from "library/common/constants/apiPaths";
import { Dispatch } from "redux";

export enum QuotesActionTypes {
  SET_QUOTES = "SET_QUOTES",
}

export function setQuotes(quotes: quote[]) {
  return {
    type: QuotesActionTypes.SET_QUOTES,
    payload: quotes,
  };
}

export function fetchAndSetQuotes() {
  const apiPath = apiMainPath + apiPaths.AllQuotes;

  return async function (dispatch: Dispatch) {
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    dispatch(setQuotes(jsonRes));
  };
}

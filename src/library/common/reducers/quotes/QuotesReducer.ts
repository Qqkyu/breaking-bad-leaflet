import { QuotesActions, QuotesState } from "library/common/reducers/quotes/quotes-type";
import { QuotesActionTypes } from "library/common/actions/QuotesActions";

const initialState: QuotesState = {
  quotes: [],
  randomQuote: undefined,
};

const quotesReducer = (state: QuotesState = initialState, action: QuotesActions): QuotesState => {
  switch (action.type) {
    case QuotesActionTypes.SET_QUOTES:
      const newQuotes = action.payload;
      return {
        ...state,
        quotes: newQuotes,
      };
    case QuotesActionTypes.SET_RANDOM_QUOTE:
      const newRandomQuote = action.payload[0];
      return {
        ...state,
        randomQuote: newRandomQuote,
      };
  }
  return state;
};

export default quotesReducer;

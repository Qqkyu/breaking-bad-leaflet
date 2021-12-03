import { QuotesAction, QuotesState } from "library/common/reducers/quotes/quotes-type";
import { QuotesActionTypes } from "library/common/actions/QuotesActions";

const initialState: QuotesState = {
  quotes: [],
};

const quotesReducer = (state: QuotesState = initialState, action: QuotesAction): QuotesState => {
  switch (action.type) {
    case QuotesActionTypes.SET_QUOTES:
      const newQuotes = action.payload;
      return {
        ...state,
        quotes: newQuotes,
      };
  }
  return state;
};

export default quotesReducer;

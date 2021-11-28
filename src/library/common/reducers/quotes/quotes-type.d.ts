import { quote } from "library/common/components/Quote/quote";

type QuotesState = {
  quotes: quote[];
  randomQuote: quote | undefined;
};

type QuotesAction = {
  type: string;
  payload: quote[];
};

type RandomQuoteAction = {
  type: string;
  payload: quote[];
};

type QuotesActions = QuotesAction | RandomQuoteAction;

type DispatchType = ((args: QuotesAction) => QuotesAction) | ((args: RandomQuoteAction) => RandomQuoteAction);

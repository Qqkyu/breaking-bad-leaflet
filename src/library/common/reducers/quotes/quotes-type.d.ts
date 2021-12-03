import { quote } from "library/common/components/Main/Quote/quote";

type QuotesState = {
  quotes: quote[];
};

type QuotesAction = {
  type: string;
  payload: quote[];
};

type DispatchType = (args: QuotesAction) => QuotesAction;

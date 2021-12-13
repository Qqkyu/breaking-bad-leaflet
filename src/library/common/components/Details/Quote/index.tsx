import { useEffect, useState } from "react";

import Loader from "library/common/components/Loader";
import ObjectFactory from "library/common/components/ObjectFactory";
import { quote } from "library/common/components/Main/Quote/quote";

import { SearchParamsType } from "library/common/constants/searchParams";
import BreakingBadApi from "main/api";

import "./styles.scss";

const api = BreakingBadApi.getInstance();

const QuoteDetails = ({ match }) => {
  const [quote, setQuote] = useState<quote | undefined>(undefined);

  useEffect(() => {
    const numId = Number(match.params.id);
    if (match.params.id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    fetchQuote(numId);
  }, [match.params.id]);

  async function fetchQuote(id: number): Promise<void> {
    const quoteData = await api.fetchQuoteById(id);
    if (quoteData === undefined) {
      throw RangeError("Invalid quote id");
    }
    setQuote(quoteData);
  }

  return quote === undefined ? (
    <Loader />
  ) : (
    <ObjectFactory type={SearchParamsType.Quote} object={quote} minified={false} />
  );
};

export default QuoteDetails;

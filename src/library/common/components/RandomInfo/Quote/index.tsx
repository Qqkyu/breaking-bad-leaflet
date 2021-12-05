import { useEffect, useState } from "react";

import Loader from "library/common/components/Loader";
import ObjectFactory from "library/common/components/ObjectFactory";
import { quote } from "library/common/components/Main/Quote/quote";

import { SearchParamsType } from "library/common/constants/searchParams";
import api from "main/api";

import "./styles.scss";

const RandomQuote = () => {
  const [quote, setQuote] = useState<quote | undefined>(undefined);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote(): Promise<void> {
    const quoteData = await api.fetchRandomQuote();
    setQuote(quoteData);
  }

  return quote === undefined ? <Loader /> : <ObjectFactory type={SearchParamsType.Quote} object={quote} />;
};

export default RandomQuote;

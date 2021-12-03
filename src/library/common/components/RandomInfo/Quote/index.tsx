import { useEffect, useState } from "react";

import Quote from "library/common/components/Main/Quote";
import api from "main/api";

import "./styles.scss";

const RandomQuote = () => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote(): Promise<void> {
    const quoteData = await api.fetchRandomQuote();
    setState(Object.assign({ loading: false }, quoteData));
  }

  return (
    <div>
      {state.loading ? (
        <h2> Loading ... </h2>
      ) : (
        <div>
          <Quote
            quote_id={state["quote_id"]}
            key={state["quote_id"]}
            quote={state["quote"]}
            author={state["author"]}
            series={state["series"]}
          />
        </div>
      )}
    </div>
  );
};

export default RandomQuote;

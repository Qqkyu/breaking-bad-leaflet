import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Quote from "library/common/components/Main/Quote";
import api from "main/api";

import "./styles.scss";

const QuoteDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const numId = Number(id);
    if (id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    fetchQuote(numId);
  }, [id]);

  async function fetchQuote(id: number): Promise<void> {
    const quoteData = await api.fetchQuoteById(id);
    if (quoteData === undefined) {
      throw RangeError("Invalid quote id");
    }
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

export default QuoteDetails;

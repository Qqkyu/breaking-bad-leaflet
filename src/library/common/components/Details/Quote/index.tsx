import { useEffect, useState } from "react";
import { useParams } from "react-router";

import data from "main/data";

import "./styles.scss";
import { SearchParamsType } from "library/common/constants/searchParams";
import Quote from "library/common/components/Quote";

const QuoteDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const numId = Number(id);
    if (id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    const quoteData = data.getDataByTypeAndId(SearchParamsType.Quote, numId);
    setState(Object.assign({ loading: false }, quoteData));
  }, [id]);

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

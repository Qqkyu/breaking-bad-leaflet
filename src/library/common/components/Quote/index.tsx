import { FunctionComponent } from "react";
import { quote } from "library/common/components/Quote/quote";

import "./styles.scss";

const Quote: FunctionComponent<quote> = (props) => {
  const { id, quote, author, series } = props;

  return (
    <div>
      <h1>Quote</h1>
      <h2>{quote}</h2>
    </div>
  );
};

export default Quote;

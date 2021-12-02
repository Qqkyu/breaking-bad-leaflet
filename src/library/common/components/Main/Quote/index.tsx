import { FunctionComponent } from "react";
import { quote } from "library/common/components/Main/Quote/quote";

import "./styles.scss";

const Quote: FunctionComponent<quote> = (props) => {
  const { quote, author, series } = props;

  return (
    <div>
      <h2>Quote: {quote}</h2>
      <p>Author: {author}</p>
      <p>Series: {series}</p>
    </div>
  );
};

export default Quote;

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { quote } from "library/common/components/Main/Quote/quote";

import "./styles.scss";

const Quote: FunctionComponent<quote & { pathname: string }> = (props) => {
  const { quote, author, series, pathname } = props;

  return (
    <div className="quote-wrapper">
      <Link to={pathname}>
        <span className="quote">"{quote}"</span>
      </Link>
      {author ? <p>Author: {author}</p> : <></>}
      {series ? <p>Series: {series}</p> : <></>}
    </div>
  );
};

export default Quote;

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { quote } from "library/common/components/Main/Quote/quote";

import "./styles.scss";

interface QuoteProps extends quote {
  pathname: string;
}

const Quote: FunctionComponent<QuoteProps> = (props) => {
  const { quote, author, series, pathname } = props;

  return (
    <div className="quote-wrapper">
      {pathname ? (
        <Link to={pathname}>
          <span className="quote">"{quote}"</span>
        </Link>
      ) : (
        <span className="quote">"{quote}"</span>
      )}
      {author ? <p>Author: {author}</p> : <></>}
      {series ? <p>Series: {series}</p> : <></>}
    </div>
  );
};

export default Quote;

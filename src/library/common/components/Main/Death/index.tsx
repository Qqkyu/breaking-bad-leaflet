import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { death } from "library/common/components/Main/Death/death";

import "./styles.scss";

const Death: FunctionComponent<death & { pathname: string }> = (props) => {
  const { death, cause, responsible, last_words, season, episode, number_of_deaths, pathname } = props;

  return (
    <div className="death-wrapper">
      {pathname ? (
        <Link to={pathname}>
          <span className="death">{death}</span>
        </Link>
      ) : (
        <span className="death">{death}</span>
      )}
      {cause ? <p>Cause: {cause}</p> : <></>}
      {responsible ? <p>Responsible: {responsible}</p> : <></>}
      {last_words ? <p>Last words: {last_words}</p> : <></>}
      {season ? <p>Season: {season}</p> : <></>}
      {episode ? <p>Episode: {episode}</p> : <></>}
      {number_of_deaths ? <p>Number of deaths: {number_of_deaths}</p> : <></>}
    </div>
  );
};

export default Death;

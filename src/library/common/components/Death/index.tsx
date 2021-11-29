import { FunctionComponent } from "react";
import { death } from "library/common/components/Death/death";

import "./styles.scss";

const Death: FunctionComponent<death> = (props) => {
  const { death, cause, responsible, last_words, season, episode, number_of_deaths } = props;

  return (
    <div>
      <h2>Death: {death}</h2>
      <p>Cause: {cause}</p>
      <p>Responsible: {responsible}</p>
      <p>Last words: {last_words}</p>
      <p>Season: {season}</p>
      <p>Episode: {episode}</p>
      <p>Number of deaths: {number_of_deaths}</p>
    </div>
  );
};

export default Death;

import { FunctionComponent } from "react";
import { death } from "library/common/components/Death/death";

import "./styles.scss";

const Death: FunctionComponent<death> = (props) => {
  const { id, death, cause, responsible, last_words, season, episode, number_of_deaths } = props;

  return (
    <div>
      <h1>Death</h1>
      <h2>{death}</h2>
    </div>
  );
};

export default Death;

import { FunctionComponent } from "react";
import { episode } from "library/common/components/Episode/episode";

import "./styles.scss";

const Episode: FunctionComponent<episode> = (props) => {
  const { id, title, season, episode, air_date, characters, series } = props;

  return (
    <div>
      <h1>Episode</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Episode;

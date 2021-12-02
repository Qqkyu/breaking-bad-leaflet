import { FunctionComponent } from "react";
import { episode } from "library/common/components/Main/Episode/episode";

import "./styles.scss";

const Episode: FunctionComponent<episode> = (props) => {
  const { title, season, episode, air_date, characters, series } = props;

  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Season: {season}</p>
      <p>Episode: {episode}</p>
      <p>Air date: {air_date}</p>
      <p>Characters: {characters}</p>
      <p>Series: {series}</p>
    </div>
  );
};

export default Episode;

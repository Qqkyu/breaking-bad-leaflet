import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { episode } from "library/common/components/Main/Episode/episode";
import { createEpisodeInfo, mapArray } from "library/utilities/utils";

import "./styles.scss";

const Episode: FunctionComponent<episode & { pathname: string }> = (props) => {
  const { title, season, episode, air_date, characters, series, pathname } = props;

  return (
    <div className="episode-wrapper">
      <Link to={pathname}>
        <span className="episode">{createEpisodeInfo(title, season, episode)}</span>
      </Link>
      {air_date ? <p>Air date: {air_date}</p> : <></>}
      {characters ? <p>Characters: {mapArray(characters)}</p> : <></>}
      {series ? <p>Series: {series}</p> : <></>}
    </div>
  );
};

export default Episode;

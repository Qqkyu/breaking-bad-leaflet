import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { createEpisodeInfo } from "library/common/components/Main/Episode/utils/episode-utils";
import { episode } from "library/common/components/Main/Episode/episode";
import { mapArray } from "library/utilities/utils";

import "./styles.scss";

const Episode: FunctionComponent<episode & { pathname: string }> = (props) => {
  const { title, season, episode, air_date, characters, series, pathname } = props;

  return (
    <div className="episode-wrapper">
      {pathname ? (
        <Link to={pathname}>
          <span className="episode">{createEpisodeInfo(title, season, episode)}</span>
        </Link>
      ) : (
        <span className="episode">{createEpisodeInfo(title, season, episode)}</span>
      )}
      {air_date ? <p>Air date: {air_date}</p> : <></>}
      {characters ? <p>Characters: {mapArray(characters)}</p> : <></>}
      {series ? <p>Series: {series}</p> : <></>}
    </div>
  );
};

export default Episode;

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { SearchParamsType } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";

import Character from "library/common/components/Character";
import Episode from "library/common/components/Episode";
import Quote from "library/common/components/Quote";
import Death from "library/common/components/Death";
import { character } from "library/common/components/Character/character";
import { episode } from "library/common/components/Episode/episode";
import { quote } from "library/common/components/Quote/quote";
import { death } from "library/common/components/Death/death";

import "./resultsStyles.scss";

const Results: FunctionComponent<{ type: SearchParamsType; objects: objects[] }> = ({ type, objects }) => {
  return (
    <div>
      {!objects.length ? (
        <h1>No Objects Found</h1>
      ) : (
        // eslint-disable-next-line array-callback-return
        objects.map((object) => {
          switch (type) {
            case SearchParamsType.Character:
              const characterObject = object as character;
              return (
                <Link to={`/characters/details/${characterObject.char_id}`}>
                  <Character
                    char_id={characterObject.char_id}
                    key={characterObject.char_id}
                    name={characterObject.name}
                    birthday={characterObject.birthday}
                    occupation={characterObject.occupation}
                    img={characterObject.img}
                    status={characterObject.status}
                    nickname={characterObject.nickname}
                    appearance={characterObject.appearance}
                    portrayed={characterObject.portrayed}
                    category={characterObject.category}
                  />
                </Link>
              );
            case SearchParamsType.Death:
              const deathObject = object as death;
              return (
                <Link to={`/deaths/details/${deathObject.death_id}`}>
                  <Death
                    death_id={deathObject.death_id}
                    key={deathObject.death_id}
                    death={deathObject.death}
                    cause={deathObject.cause}
                    responsible={deathObject.responsible}
                    last_words={deathObject.last_words}
                    season={deathObject.season}
                    episode={deathObject.episode}
                    number_of_deaths={deathObject.number_of_deaths}
                  />
                </Link>
              );
            case SearchParamsType.Episode:
              const episodeObject = object as episode;
              return (
                <Link to={`/episodes/details/${episodeObject.episode_id}`}>
                  <Episode
                    episode_id={episodeObject.episode_id}
                    key={episodeObject.episode_id}
                    title={episodeObject.title}
                    season={episodeObject.season}
                    episode={episodeObject.episode}
                    air_date={episodeObject.air_date}
                    characters={episodeObject.characters}
                    series={episodeObject.series}
                  />
                </Link>
              );
            case SearchParamsType.Quote:
              const quoteObject = object as quote;
              return (
                <Link to={`/quotes/details/${quoteObject.quote_id}`}>
                  <Quote
                    quote_id={quoteObject.quote_id}
                    key={quoteObject.quote_id}
                    quote={quoteObject.quote}
                    author={quoteObject.author}
                    series={quoteObject.series}
                  />
                </Link>
              );
          }
        })
      )}
    </div>
  );
};

export default Results;

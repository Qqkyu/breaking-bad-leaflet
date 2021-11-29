import { FunctionComponent } from "react";
import { SearchParamsType } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";

import Character from "library/common/components/Character";
import { character } from "library/common/components/Character/character";
import { death } from "library/common/components/Death/death";
import Death from "library/common/components/Death";

import "./resultsStyles.scss";
import { episode } from "library/common/components/Episode/episode";
import Episode from "library/common/components/Episode";
import { quote } from "library/common/components/Quote/quote";
import Quote from "library/common/components/Quote";

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
              );
            case SearchParamsType.Death:
              const deathObject = object as death;
              return (
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
              );
            case SearchParamsType.Episode:
              const episodeObject = object as episode;
              return (
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
              );
            case SearchParamsType.Quote:
              const quoteObject = object as quote;
              return (
                <Quote
                  quote_id={quoteObject.quote_id}
                  key={quoteObject.quote_id}
                  quote={quoteObject.quote}
                  author={quoteObject.author}
                  series={quoteObject.series}
                />
              );
          }
        })
      )}
    </div>
  );
};

export default Results;

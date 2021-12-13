import { FunctionComponent } from "react";

import Character from "library/common/components/Main/Character";
import Episode from "library/common/components/Main/Episode";
import Death from "library/common/components/Main/Death";
import Quote from "library/common/components/Main/Quote";
import { character } from "library/common/components/Main/Character/character";
import { episode } from "library/common/components/Main/Episode/episode";
import { quote } from "library/common/components/Main/Quote/quote";
import { death } from "library/common/components/Main/Death/death";
import { objects } from "library/common/constants/objects";
import { SearchParamsType } from "library/common/constants/searchParams";

import "./styles.scss";

interface ObjectFactoryProps {
  type: SearchParamsType;
  object: objects;
  minified: boolean;
}

const ObjectFactory: FunctionComponent<ObjectFactoryProps> = ({ type, object, minified }) => {
  switch (type) {
    case SearchParamsType.Character: {
      const characterObject = object as character;
      const pathname = `/characters/${characterObject.char_id}`;
      return (
        <>
          {minified ? (
            <Character
              char_id={characterObject.char_id}
              key={characterObject.char_id}
              name={characterObject.name}
              img={characterObject.img}
              pathname={pathname}
            />
          ) : (
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
              pathname={""}
            />
          )}
        </>
      );
    }
    case SearchParamsType.Death: {
      const deathObject = object as death;
      const pathname = `/deaths/${deathObject.death_id}`;
      return (
        <>
          {minified ? (
            <Death
              death_id={deathObject.death_id}
              key={deathObject.death_id}
              death={deathObject.death}
              pathname={pathname}
            />
          ) : (
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
              pathname={""}
            />
          )}
        </>
      );
    }
    case SearchParamsType.Episode: {
      const episodeObject = object as episode;
      const pathname = `/episodes/${episodeObject.episode_id}`;
      return (
        <>
          {minified ? (
            <Episode
              episode_id={episodeObject.episode_id}
              key={episodeObject.episode_id}
              title={episodeObject.title}
              season={episodeObject.season}
              episode={episodeObject.episode}
              pathname={pathname}
            />
          ) : (
            <Episode
              episode_id={episodeObject.episode_id}
              key={episodeObject.episode_id}
              title={episodeObject.title}
              season={episodeObject.season}
              episode={episodeObject.episode}
              air_date={episodeObject.air_date}
              characters={episodeObject.characters}
              series={episodeObject.series}
              pathname={""}
            />
          )}
        </>
      );
    }
    case SearchParamsType.Quote:
      const quoteObject = object as quote;
      const pathname = `/quotes/${quoteObject.quote_id}`;
      return (
        <>
          {minified ? (
            <Quote
              quote_id={quoteObject.quote_id}
              key={quoteObject.quote_id}
              quote={quoteObject.quote}
              pathname={pathname}
            />
          ) : (
            <Quote
              quote_id={quoteObject.quote_id}
              key={quoteObject.quote_id}
              quote={quoteObject.quote}
              author={quoteObject.author}
              series={quoteObject.series}
              pathname={""}
            />
          )}
        </>
      );
  }
};

export default ObjectFactory;

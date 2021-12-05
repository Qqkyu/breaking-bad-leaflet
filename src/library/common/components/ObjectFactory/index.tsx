import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

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

const ObjectFactory: FunctionComponent<{ type: SearchParamsType; object: objects }> = ({ type, object }) => {
  switch (type) {
    case SearchParamsType.Character:
      const characterObject = object as character;
      return (
        <Link to={`/characters/${characterObject.char_id}`} key={`link-${characterObject.char_id}`}>
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
        <Link to={`/deaths/${deathObject.death_id}`} key={`link-${deathObject.death_id}`}>
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
        <Link to={`/episodes/${episodeObject.episode_id}`} key={`link-${episodeObject.episode_id}`}>
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
        <Link to={`/quotes/${quoteObject.quote_id}`} key={`link-${quoteObject.quote_id}`}>
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
};

export default ObjectFactory;
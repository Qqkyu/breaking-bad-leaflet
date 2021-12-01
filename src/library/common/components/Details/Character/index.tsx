import { useEffect, useState } from "react";
import { useParams } from "react-router";

import data from "main/data";

import "./styles.scss";
import { SearchParamsType } from "library/common/constants/searchParams";
import Character from "library/common/components/Character";

const CharacterDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const numId = Number(id);
    if (id === undefined || !numId) {
      throw TypeError("Invalid character id");
    }
    const characterData = data.getDataByTypeAndId(SearchParamsType.Character, numId);
    setState(Object.assign({ loading: false }, characterData));
  }, [id]);

  return (
    <div>
      {state.loading ? (
        <h2> Loading ... </h2>
      ) : (
        <div>
          <Character
            char_id={state["char_id"]}
            key={state["char_id"]}
            name={state["name"]}
            birthday={state["birthday"]}
            occupation={state["occupation"]}
            img={state["img"]}
            status={state["status"]}
            nickname={state["nickname"]}
            appearance={state["appearance"]}
            portrayed={state["portrayed"]}
            category={state["category"]}
          />
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;

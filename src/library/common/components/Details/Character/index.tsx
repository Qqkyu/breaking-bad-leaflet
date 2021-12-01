import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Character from "library/common/components/Character";
import api from "main/api";

import "./styles.scss";

const CharacterDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const numId = Number(id);
    if (id === undefined || !numId) {
      throw TypeError("Invalid character id");
    }
    fetchCharacter(numId);
  }, [id]);

  async function fetchCharacter(id: number): Promise<void> {
    const characterData = await api.fetchCharacterById(id);
    if (characterData === undefined) {
      throw RangeError("Invalid character id");
    }
    setState(Object.assign({ loading: false }, characterData));
  }

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

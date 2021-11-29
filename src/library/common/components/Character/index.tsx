import { character } from "library/common/components/Character/character";
import { FunctionComponent } from "react";

import "./styles.scss";

const Character: FunctionComponent<character> = (props) => {
  const { id, name, birthday, occupation, img, status, nickname, appearance, portrayed, category } = props;

  return (
    <div>
      <h1>Character</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default Character;

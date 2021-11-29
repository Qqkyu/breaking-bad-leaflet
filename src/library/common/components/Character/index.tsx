import { character } from "library/common/components/Character/character";
import { FunctionComponent } from "react";

import "./styles.scss";

const Character: FunctionComponent<character> = (props) => {
  const { name, birthday, occupation, img, status, nickname, appearance, portrayed, category } = props;

  return (
    <figure>
      <img src={img} alt={name} />
      <figcaption>{name}</figcaption>
      <p>Birthday: {birthday}</p>
      <p>Occupation: {occupation}</p>
      <p>Status: {status}</p>
      <p>Nickname: {nickname}</p>
      <p>Apperance: {appearance}</p>
      <p>Porttrayed: {portrayed}</p>
      <p>Category: {category}</p>
    </figure>
  );
};

export default Character;

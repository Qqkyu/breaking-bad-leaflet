import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { character } from "library/common/components/Main/Character/character";

import "./styles.scss";

const Character: FunctionComponent<character & { pathname: string }> = (props) => {
  const { name, birthday, occupation, img, status, nickname, appearance, portrayed, category, pathname } = props;

  return (
    <div className="figure-wrapper">
      <figure>
        <img src={img} alt={name} />
        <figcaption>
          <Link to={pathname}>
            <p>{name}</p>
          </Link>
        </figcaption>
        {birthday ? <p>Birthday: {birthday}</p> : <></>}
        {occupation ? <p>Occupation: {occupation}</p> : <></>}
        {status ? <p>Status: {status}</p> : <></>}
        {nickname ? <p>Nickname: {nickname}</p> : <></>}
        {appearance ? <p>Apperance: {appearance}</p> : <></>}
        {portrayed ? <p>Porttrayed: {portrayed}</p> : <></>}
        {category ? <p>Category: {category}</p> : <></>}
      </figure>
    </div>
  );
};

export default Character;

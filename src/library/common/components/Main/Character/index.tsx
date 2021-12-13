import { FunctionComponent, memo } from "react";
import { Link } from "react-router-dom";

import { character } from "library/common/components/Main/Character/character";
import { mapArray } from "library/utilities/utils";

import "./styles.scss";

const Character: FunctionComponent<character & { pathname: string }> = (props) => {
  const { name, birthday, occupation, img, status, nickname, appearance, portrayed, category, pathname } = props;
  return (
    <div className="figure-wrapper">
      <figure>
        <img src={img} alt={name} />
        <figcaption>
          {pathname ? (
            <Link to={pathname}>
              <p>{name}</p>
            </Link>
          ) : (
            <p>{name}</p>
          )}
        </figcaption>
        {birthday ? <p>Birthday: {birthday}</p> : <></>}
        {occupation ? <p>Occupation: {mapArray(occupation)}</p> : <></>}
        {status ? <p>Status: {status}</p> : <></>}
        {nickname ? <p>Nickname: {nickname}</p> : <></>}
        {appearance ? <p>Apperance: {mapArray(appearance)}</p> : <></>}
        {portrayed ? <p>Portrayed: {portrayed}</p> : <></>}
        {category ? <p>Category: {category}</p> : <></>}
      </figure>
    </div>
  );
};

export default memo(Character);

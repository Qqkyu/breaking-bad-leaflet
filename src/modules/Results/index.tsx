import { FunctionComponent } from "react";

import ObjectFactory from "library/common/components/ObjectFactory";

import { SearchParamsType } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";

import "./resultsStyles.scss";

const Results: FunctionComponent<{ type: SearchParamsType; objects: objects[] }> = ({ type, objects }) => {
  return (
    <div className="results">
      {objects.map((object) => (
        <ObjectFactory type={type} object={object} minified={true} />
      ))}
    </div>
  );
};

export default Results;

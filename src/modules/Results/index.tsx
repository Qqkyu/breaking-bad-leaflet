import { FunctionComponent, memo } from "react";

import ObjectFactory from "library/common/components/ObjectFactory";
import { SearchParamsType } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";
import { areEqual } from "modules/Results/utils/results-utils";

import "./resultsStyles.scss";

export interface ResultsProps {
  type: SearchParamsType;
  objects: objects[];
}

const Results: FunctionComponent<ResultsProps> = ({ type, objects }) => {
  console.log("allo");
  return (
    <div className="results">
      {objects.map((object) => (
        <ObjectFactory type={type} object={object} minified={true} />
      ))}
    </div>
  );
};

export default memo(Results, areEqual);

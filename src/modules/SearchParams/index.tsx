import { useState } from "react";

import { SearchParamsType } from "library/common/constants/searchParams";
import { AvailableTypes } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";
import data from "main/data";

import Results from "modules/Results";

import "./searchParamsStyles.scss";

const SearchParams = () => {
  const [searchParamType, setSearchParamType] = useState(SearchParamsType.Character);
  const [objects, setObjects] = useState([] as objects[]);

  function requestResults() {
    setObjects(data.getDataByType(searchParamType));
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestResults();
        }}
      >
        <label htmlFor="searchParamType">
          Type
          <select
            id="searchParamType"
            value={searchParamType}
            onChange={(e) => setSearchParamType(e.target.value as SearchParamsType)}
            onBlur={(e) => setSearchParamType(e.target.value as SearchParamsType)}
          >
            <option />
            {AvailableTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results type={searchParamType} objects={objects} />
    </div>
  );
};

export default SearchParams;

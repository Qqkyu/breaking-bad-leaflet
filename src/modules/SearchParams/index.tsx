import React, { useState } from "react";

import { SearchParamsType } from "library/common/constants/searchParams";
import { AvailableTypes } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";
import Results from "modules/Results";
import data from "main/data";

import "./searchParamsStyles.scss";

const SearchParams = () => {
  const [searchParamType, setSearchParamType] = useState<SearchParamsType | null>(null);
  const [objects, setObjects] = useState([] as objects[]);

  function updateObjects(e: React.ChangeEvent<HTMLSelectElement>): void {
    if (e.target.value !== "") {
      const newSearchParamType = e.target.value as SearchParamsType;
      setObjects(data.getDataByType(newSearchParamType));
      setSearchParamType(newSearchParamType);
    } else {
      setObjects([]);
      setSearchParamType(null);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="searchParamType" className="search-param-type-label">
          Type
        </label>
        <div className="select-wrapper">
          <select
            id="searchParamType"
            value={searchParamType ? searchParamType : ""}
            onChange={(e) => updateObjects(e)}
            onBlur={(e) => updateObjects(e)}
          >
            <option />
            {AvailableTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </form>
      {searchParamType ? <Results type={searchParamType} objects={objects} /> : <></>}
    </div>
  );
};

export default SearchParams;

import { useState } from "react";

import { SearchParamsType } from "library/common/constants/searchParams";
import { AvailableTypes } from "library/common/constants/searchParams";

import Results from "modules/Results";

import "./searchParamsStyles.scss";

const SearchParams = () => {
  const [searchParamType, setSearchParamType] = useState<SearchParamsType | null>(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="searchParamType">
          Type
          <select
            id="searchParamType"
            value={searchParamType ? searchParamType : ""}
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
      </form>
      {searchParamType ? <Results type={searchParamType} /> : <></>}
    </div>
  );
};

export default SearchParams;

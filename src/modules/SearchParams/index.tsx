import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Loader from "library/common/components/Loader";
import { SearchParamsType } from "library/common/constants/searchParams";
import { AvailableTypes } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";
import { IAppState } from "main/store/type";
import Results from "modules/Results";
import Data from "main/data";

import "./searchParamsStyles.scss";

const data = Data.getInstance();

const SearchParams = () => {
  const theme = useSelector((state: IAppState) => ({
    ...state.characters,
    ...state.deaths,
    ...state.episodes,
    ...state.quotes,
  }));
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [searchParamType, setSearchParamType] = useState<SearchParamsType | null>(null);
  const [objects, setObjects] = useState([] as objects[]);

  useEffect(() => {
    if (theme.characters.length && theme.deaths.length && theme.episodes.length && theme.quotes.length) {
      setDataLoaded(true);
    }
  }, [theme]);

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

  return !dataLoaded ? (
    <Loader />
  ) : (
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

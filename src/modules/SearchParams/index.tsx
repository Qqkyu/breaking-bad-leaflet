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
import { filterObjects } from "library/utilities/utils";

const data = Data.getInstance();

const SearchParams = () => {
  const state = useSelector((state: IAppState) => ({
    ...state.characters,
    ...state.deaths,
    ...state.episodes,
    ...state.quotes,
  }));
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [searchParamType, setSearchParamType] = useState<SearchParamsType | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [objects, setObjects] = useState<objects[]>([]);
  const [filteredObjects, setFilteredObjects] = useState<objects[]>([]);

  useEffect(() => {
    if (state.characters.length && state.deaths.length && state.episodes.length && state.quotes.length) {
      setDataLoaded(true);
    }
  }, [state]);

  useEffect(() => {
    if (searchParamType) {
      setFilteredObjects(filterObjects(searchParamType, objects, filter));
    }
  }, [filter, objects, searchParamType]);

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
        <label htmlFor="filterObjects" className="search-param-type-label">
          Filter
        </label>
        <div id="filterObjects" className="filter-wrapper">
          <input type="text" onInput={(e) => setFilter(e.currentTarget.value)} />
        </div>
      </form>
      {searchParamType ? <Results type={searchParamType} objects={filteredObjects} /> : <></>}
    </div>
  );
};

export default SearchParams;

import { useState } from "react";
import SearchBarAsync from "react-select/async";
import { searchInstructorsByName } from "../../api";

function TitleAndSearchBar({ onSelect, onSearch, thing }) {
  const [selectedThing, setSelectedThing] = useState({});

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) return;
    searchInstructorsByName(inputValue).then((data) => {
      callback(onSearch(data));
    });
  };

  const handleChange = (selectedOption) => {
    setSelectedThing(selectedOption);
    onSelect(selectedOption);
    return selectedOption;
  };

  return (
    <>
      <div
        className={`${
          selectedThing?.value ? "" : "my-auto"
        } mx-auto max-w-7xl w-full`}
      >
        <h1
          className={`text-7xl text-center font-light m-auto mb-24 ${
            selectedThing?.value ? "hidden" : ""
          }`}
        >
          Editar {thing}
        </h1>
        <SearchBarAsync
          value=""
          placeholder={`Buscar ${thing}...`}
          onChange={handleChange}
          isClearable={false}
          loadOptions={loadOptions}
        />
      </div>
    </>
  );
}

export default TitleAndSearchBar;

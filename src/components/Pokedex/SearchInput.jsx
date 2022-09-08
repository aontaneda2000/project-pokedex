import React from "react";

const SearchInput = ({ setPokeSearch, setOptionType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setPokeSearch(e.target.searchText.value.trim().toLowerCase());
    setOptionType("All");
    e.target.searchText.value = "";
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="form__input" id="searchText" type="text" />
      <button className="form__btn">Search</button>
    </form>
  );
};

export default SearchInput;

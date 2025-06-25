import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        Search your game and start tracking your progress
      </div>
      <form className="searchPage__searchFunc">
        <Input
          name="search"
          value={search}
          placeholder={"Search for games"}
          onChange={handleOnChange}
          className="searchPage__searchFunc__bar"
        />
        <Button
          name={"Search"}
          type={"button"}
          className="searchPage__searchFunc__submit"
        />
      </form>
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useGames } from "../hook/useGames";

type searchForm = {
  title: string;
};

const Search = () => {
  const [search, setSearch] = useState<searchForm>({
    title: "",
  });
  const { data, getGames } = useGames();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await getGames(search);
    } catch (err) {
      console.error("Failed to submit: ", err);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        Search your game and start tracking your progress
      </div>
      <form className="searchPage__searchFunc" onSubmit={handleSubmit}>
        <Input
          name="title"
          value={search.title}
          placeholder={"Search for games"}
          onChange={handleOnChange}
          className="searchPage__searchFunc__bar"
        />
        <Button
          name={"Search"}
          type={"submit"}
          className="searchPage__searchFunc__submit"
        />
      </form>
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useGames } from "../hook/useGames";
import { useNavigate } from "react-router-dom";

type searchForm = {
  title: string;
  page?: number;
  page_size?: number;
};

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<searchForm>({
    title: "",
    page: 1,
    page_size: 10,
  });
  const { games, prev, next, getGames } = useGames();
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

  const handleNext = () => {
    if (next) {
      const nextPage = Number(new URL(next).searchParams.get("page"));
      setSearch((prev) => ({
        ...prev,
        page: nextPage,
      }));
    }
  };

  const handlePrevious = () => {
    if (prev) {
      const prevPage = Number(new URL(prev).searchParams.get("page"));

      setSearch((prev) => ({
        ...prev,
        page: prevPage < 1 ? 1 : prevPage,
      }));
    }
  };

  useEffect(() => {
    getGames(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.page]);

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
      <div className="searchPage__gameList">
        {games.map((game) => (
          <div
            key={game.id}
            className="searchPage__gameList__gameCard"
            onClick={() => navigate(`/game/${game.id}`)}
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="searchPage__gameList__gameCard__gameImg"
            />
            <div className="searchPage__gameList__gameCard__gameInfo">
              <h3>{game.name}</h3>
              <p>Released: {game.released}</p>
              <p>Rating: {game.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
      {games.length > 0 && (
        <div className="searchPage__pagination">
          <Button
            name="previous"
            type={"button"}
            onClick={handlePrevious}
            className="searchPage__pagination__button"
          />
          <p>{search.page}</p>
          <Button
            name="next"
            type={"button"}
            onClick={handleNext}
            className="searchPage__pagination__button"
          />
        </div>
      )}
    </div>
  );
};

export default Search;

import { useState } from "react";
import * as gameService from "../Services/gameService";

export const useGames = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null | unknown>(null);
  const getGames = async (search: { title: string }) => {
    try {
      const res = await gameService.getGame(search);
      setData(res);
    } catch (err) {
      setError(err);
    }
  };

  return { data, error, getGames };
};

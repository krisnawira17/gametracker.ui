import { useState } from "react";
import * as gameService from "../Services/gameService";

type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: object;
  metacritic: number;
  playtime: number;
  suggestion_count: number;
  updated: string;
  esrb_rating: object;
  platforms: [object];
};

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [prev, setPrev] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);
  const [error, setError] = useState<string | null | unknown>(null);

  const getGames = async (search: { title: string }) => {
    try {
      const res = await gameService.getGame(search);
      setGames(res.data);
      setPrev(res.previous);
      setNext(res.next);
    } catch (err) {
      setError(err);
    }
  };

  return { games, prev, next, error, getGames };
};

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
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet?: number;
    owned?: number;
    beaten?: number;
    toplay?: number;
    dropped?: number;
    playing?: number;
  };
  metacritic: number;
  playtime: number;
  suggestion_count: number;
  updated: string;
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  } | null;
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
};

type GameDetail = {
  id: number;
  name: string;
  slug: string;
  description: string;
  background_image: string;
  background_image_additional?: string;
  released: string;
  rating: number;
  ratings_count: number;
  playtime: number;

  genres: {
    id: number;
    name: string;
    slug: string;
  }[];

  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];

  developers: {
    id: number;
    name: string;
    slug: string;
  }[];

  publishers: {
    id: number;
    name: string;
    slug: string;
  }[];

  tags: {
    id: number;
    name: string;
    slug: string;
  }[];

  website?: string;
  metacritic?: number;
  updated?: string;

  esrb_rating?: {
    id: number;
    name: string;
    slug: string;
  };
};

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [prev, setPrev] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);
  const [errorGame, setErrorGame] = useState<string | null | unknown>(null);

  const getGames = async (search: { title: string }) => {
    try {
      const res = await gameService.getGames(search);
      setGames(res.data);
      setPrev(res.previous);
      setNext(res.next);
    } catch (err) {
      setErrorGame(err);
    }
  };

  const [gameDetail, setGameDetail] = useState<GameDetail>();
  const [errorDetail, setErrorDetail] = useState<string | null | unknown>(null);

  const getGameDetail = async (param: { id: number }) => {
    try {
      const res = await gameService.getDetailGame(param);
      setGameDetail(res.data);
    } catch (err) {
      setErrorDetail(err);
    }
  };

  return {
    games,
    prev,
    next,
    errorGame,
    gameDetail,
    errorDetail,
    getGames,
    getGameDetail,
  };
};

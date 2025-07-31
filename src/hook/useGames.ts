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
  slug: string;
  name: string;
  name_original: string;
  description: string;

  metacritic: number;
  metacritic_platforms: {
    metascore: number;
    url: string;
  }[];

  released: string;
  tba: boolean;
  updated: string;

  background_image: string;
  background_image_additional: string;
  website: string;

  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  reactions: Record<string, unknown>;

  added: number;
  added_by_status: Record<string, unknown>;
  playtime: number;

  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;

  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;

  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;

  ratings_count: number;
  suggestions_count: number;

  alternative_names: string[];
  metacritic_url: string;

  parents_count: number;
  additions_count: number;
  game_series_count: number;

  esrb_rating?: {
    id: number;
    slug: string;
    name: string;
  };

  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
    released_at: string;
    requirements: {
      minimum: string;
      recommended: string;
    };
  }[];
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

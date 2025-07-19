import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGames } from "../hook/useGames";

const Game = () => {
  const { id } = useParams();
  const gameId = { id: parseInt(id ?? "", 10) };
  const { gameDetail, getGameDetail } = useGames();
  useEffect(() => {
    getGameDetail(gameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    console.log(gameDetail);
  }, [gameDetail]);
  return <div>test</div>;
};

export default Game;

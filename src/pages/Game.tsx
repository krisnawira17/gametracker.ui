import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGames } from "../hook/useGames";
import { formatDate } from "../hook/utils";
import Button from "../components/Button";

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

  const description = gameDetail?.description.replace(/<\/?[^>]+(>|$)/g, "");

  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="wrapper__back" onClick={() => navigate("/search")}>
        &lt;
      </div>
      <div className="gameDetail">
        <div className="gameDetail__image">
          <img
            src={gameDetail?.background_image}
            className="gameDetail__image__img"
          />
          <div className="gameDetail__image__platforms">
            <p className="gameDetail__image__platforms__title">Available for</p>
            {gameDetail?.platforms.map((item) => (
              <div key={item.platform.id}>{item.platform.name}</div>
            ))}
          </div>
          <div>
            <p>Predicted playtime</p>
            <div>{gameDetail?.playtime}hr</div>
          </div>
        </div>

        <div className="gameDetail__info">
          <div className="gameDetail__info__name">{gameDetail?.name}</div>
          <div className="gameDetail__info__subinfo">
            <div className="gameDetail__info__subinfo__release">
              <p className="gameDetail__info__subinfo__release__title">
                Released date
              </p>
              {gameDetail?.released
                ? formatDate(gameDetail?.released || "")
                : "tba"}
            </div>
            <div className="gameDetail__info__subinfo__metacritic">
              <p className="gameDetail__info__subinfo__metacritic__title">
                Metacritic
              </p>
              {gameDetail?.metacritic}
            </div>
            <div className="gameDetail__info__subinfo__rating">
              <p className="gameDetail__info__subinfo__rating__title">Rating</p>
              {gameDetail?.rating}
            </div>
            <div className="gameDetail__info__subinfo__esrb">
              <p className="gameDetail__info__subinfo__esrb__title">ESRB</p>
              {gameDetail?.esrb_rating?.name}
            </div>
          </div>

          <div className="gameDetail__info__description">{description}</div>
          <div className="gameDetail__info__btns">
            <Button name={"Add game"} type={"button"} />
            <div>Personal status placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

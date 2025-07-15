import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home">
      <div className="home__landing">
        <div className="home__landing__text">
          <h2 className="home__landing__text__header">
            Tired of an endless game backlog? Prioritize and conquer your list
            with GT.
          </h2>
          <p className="home__landing__text__desc">
            Game Tracker (GT) helps you track your progress, organize your
            collection, and decide what to play next. Neatly manage your games
            in a customizable table and stay in control of your gaming journey.
            Browse your game now and add it to your collection
          </p>
          <Button
            name="Browse now"
            type="button"
            className="home__landing__text__bta"
          />
        </div>
        <div className="home__landing__img">
          <img src="../public/assets/controller.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;

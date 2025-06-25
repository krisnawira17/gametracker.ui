import { useEffect, useState } from "react";
import { getUsername } from "../hook/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState("");
  const username = getUsername();

  useEffect(() => {
    setUser(username);
  }, [username]);

  return (
    <div className="navbar">
      <h1 className="navbar__title">GT</h1>
      <ul className="navbar__list">
        <li className="navbar__list__home">
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li className="navbar__list__search">
          <Link to={"/search"}>Search</Link>
        </li>
        <li className="navbar__list__my-games">
          <Link to={"/my-games"}>My Games</Link>
        </li>
      </ul>
      <div className="navbar__profile">{user}</div>
    </div>
  );
};

export default Navbar;

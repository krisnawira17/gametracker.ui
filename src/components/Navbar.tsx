import { useEffect, useRef, useState } from "react";
import { getUsername, removeToken } from "../hook/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState("");
  const username = getUsername();

  const [modal, setModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleModalOpen = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setUser(username);
  }, [username]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
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
        <div className="navbar__profile" onClick={handleModalOpen}>
          {user}
        </div>
      </div>

      {modal && (
        <div className="modal-profile" ref={dropdownRef}>
          <ul className="modal-profile__list">
            <li className="modal-profile__list__profile">Profile</li>
            <li
              className="modal-profile__list__logOut"
              onClick={() => removeToken()}
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

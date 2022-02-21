import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const logout = () => {
    {
      console.log("before:", localStorage.getItem("user-info"));
    }
    localStorage.clear();
    {
      console.log("after:", localStorage.getItem("user-info"));
    }
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          <i className="far fa-smile-wink"></i>
        </Link>
        <div className="navbar__menu-icon">
          <span
            className={click ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          >
            ==
          </span>
        </div>
        <ul className={click ? "navbar__menu active" : "navbar__menu"}>
          <li className="navbar__item">
            <a
              href="https://www.google.com/"
              target="_blank"
              className="navbar__links"
              onClick={closeMobileMenu}
            >
              Payment
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="https://www.google.com/"
              target="_blank"
              className="navbar__links"
              onClick={closeMobileMenu}
            >
              Cards
            </a>
          </li>
        </ul>
        <div>
          <Link to="/" className="navbar__logout" onClick={logout}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

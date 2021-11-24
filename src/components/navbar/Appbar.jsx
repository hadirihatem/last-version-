import React, { useEffect, useState } from "react";
import "./Appbar.css";

import { Link } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";

import Toggle from "../toggle/Toggle";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const Appbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  //unshow the register button when we refrech
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  // const changebackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll", changebackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MECHANICAL DESIGN FACTORY
          </Link>
        

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Toggle/>
            <li className="nav-Item">
              <Link
                to="/offres"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Nosoffres
              </Link>
            </li>

            <li>
              <Link
                to="/secteurs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                secteurs
              </Link>
            </li>
            <li>
              <Link
                to="/produits"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                produits
              </Link>
            </li>
           
            <li>
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Appbar;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className={`header ${visible ? "" : "hidden"}`}>
      <div className="header-left">
        <h5>Opening Hours: Sunday - Friday (9am - 5am)</h5>
      </div>
      <div className="header-center">
        <h5>Corona virus (COVID-19 health alert)</h5>
      </div>
      <div className="header-right">
        {" "}
        <div className="header-right">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebook}
              className="icon"
              style={{ color: "blue" }}
            />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon
              icon={faTwitter}
              className="icon"
              style={{ color: "blue" }}
            />
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon"
              style={{ color: "blue" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import clsx from "clsx";
import styles from "./Navbar.module.scss";

const Component = ({ className, children }) => (
  <ul className={clsx(className, styles.navList)}>
    <li>
      <Link to={"/projects/"} className={styles.link}>
        <span>.</span>projects<span>( )</span>
      </Link>
    </li>
    <li>
      <Link to={"/about/"} className={styles.link}>
        <span>.</span>about<span>( 'me')</span>
      </Link>
    </li>
    <li>
      <a
        href="mailto:mwladyka126@gmail.com"
        target="_blanket"
        className={styles.link}
      >
        <span>.</span>contact<span>( '@')</span>
      </a>
    </li>
    <li>
      <a
        href="https://github.com/mwladyka126"
        target="_blanket"
        className={styles.icon}
      >
        {" "}
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/malgorzata-wladyka/"
        target="_blanket"
        className={styles.icon}
      >
        {" "}
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
    </li>
  </ul>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Navbar, Component as NavbarComponent };

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";

import styles from "./Header.module.scss";

const Component = ({ className, children }) => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to={"/"} className={styles.link}>
            mw
          </Link>
        </div>
        <div className={styles.navigation + " " + styles.menuBig}>
          <ul className={styles.navigation_list}>
            <li>
              <Link to={"/projects/"} className={styles.link}>
                .projects( )
              </Link>
            </li>
            <li>
              <Link to={"/about/"} className={styles.link}>
                .about('me')
              </Link>
            </li>
            <li>
              <a
                href="mailto:mwladyka126@gmail.com"
                target="_blanket"
                className={styles.link}
              >
                .contact( )
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
        </div>
        <div className={styles.hamburger}>
          <FontAwesomeIcon
            onClick={showMenu}
            className={styles.icon}
            icon={faBars}
          >
            x
          </FontAwesomeIcon>
        </div>
      </div>
      {menu ? (
        <ul className={styles.menuSmall}>
          <li>
            <Link to={"/projects/"} className={styles.link}>
              .projects( )
            </Link>
          </li>
          <li>
            <Link to={"/about/"} className={styles.link}>
              .about('me')
            </Link>
          </li>
          <li>
            <a
              href="mailto:mwladyka126@gmail.com"
              target="_blanket"
              className={styles.link}
            >
              .contact( )
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
      ) : null}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};

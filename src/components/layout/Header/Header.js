import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "./../../features/Navbar/Navbar";

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
        <Navbar className={styles.menuBig} />
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
      {menu ? <Navbar className={styles.menuSmall} /> : null}
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

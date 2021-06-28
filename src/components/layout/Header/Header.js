import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Header.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={"/"} className={styles.link}>
          mw
        </Link>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link to={"/projects/"} className={styles.link}>
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/about/"} className={styles.link}>
              About me
            </Link>
          </li>
          <li>
            <Link to={"/contact/"} className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

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

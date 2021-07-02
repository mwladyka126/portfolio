import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as BoostrapLogo } from "./../../../logos/bootstrap.svg";
import { ReactComponent as CssLogo } from "./../../../logos/css.svg";
import { ReactComponent as Html5Logo } from "./../../../logos/html5.svg";
import { ReactComponent as GithubLogo } from "./../../../logos/github.svg";
import { ReactComponent as JsLogo } from "./../../../logos/js.svg";
import { ReactComponent as MatrialUILogo } from "./../../../logos/materialUI.svg";
import { ReactComponent as MongoLogo } from "./../../../logos/mongodb.svg";
import { ReactComponent as NodeLogo } from "./../../../logos/node.svg";
import { ReactComponent as ReactLogo } from "./../../../logos/react.svg";
import { ReactComponent as ReduxLogo } from "./../../../logos/redux.svg";
import { ReactComponent as SassLogo } from "./../../../logos/sass.svg";
import { ReactComponent as WebpackLogo } from "./../../../logos/webpack.svg";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Technologies.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Technologies</h2>
    <BoostrapLogo className={styles.icon} />
    <CssLogo className={styles.icon} />
    <Html5Logo className={styles.icon} />
    <GithubLogo className={styles.icon} />
    <JsLogo className={styles.icon} />
    <MatrialUILogo className={styles.icon} />
    <MongoLogo className={styles.icon} />
    <NodeLogo className={styles.icon} />
    <ReactLogo className={styles.icon} />
    <ReduxLogo className={styles.icon} />
    <SassLogo className={styles.icon} />
    <WebpackLogo className={styles.icon} />
    {children}
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
  Component as Technologies,
  // Container as Technologies,
  Component as TechnologiesComponent,
};

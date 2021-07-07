import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as BoostrapLogo } from "./../../../logos/bootstrap.svg";
import { ReactComponent as CssLogo } from "./../../../logos/css.svg";
import { ReactComponent as Html5Logo } from "./../../../logos/html5.svg";
import { ReactComponent as GithubLogo } from "./../../../logos/github.svg";
import { ReactComponent as JsLogo } from "./../../../logos/js.svg";
import { ReactComponent as MaterialUILogo } from "./../../../logos/materialUI.svg";
import { ReactComponent as MongoLogo } from "./../../../logos/mongodb.svg";
import { ReactComponent as NodeLogo } from "./../../../logos/node.svg";
import { ReactComponent as ReactLogo } from "./../../../logos/react.svg";
import { ReactComponent as ReduxLogo } from "./../../../logos/redux.svg";
import { ReactComponent as SassLogo } from "./../../../logos/sass.svg";
import { ReactComponent as WebpackLogo } from "./../../../logos/webpack.svg";

import clsx from "clsx";

import styles from "./Technologies.module.scss";

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>/* Technologies */</h2>
    <div className={styles.tech}>
      <div className={styles.tech_item}>
        <p> Java Script </p>
        <JsLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p>HTML</p>
        <Html5Logo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p> CSS</p>
        <CssLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p> Sass</p>
        <SassLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p> Bootstrap</p>
        <BoostrapLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p>Material UI</p>
        <MaterialUILogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p> React</p>
        <ReactLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p>Redux</p>
        <ReduxLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p>Webpack</p>
        <WebpackLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p>Node Js</p>
        <NodeLogo className={styles.icon} />
      </div>
      <div className={styles.tech_item}>
        <p>MongoDB</p>
        <MongoLogo className={styles.icon} />
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Technologies, Component as TechnologiesComponent };

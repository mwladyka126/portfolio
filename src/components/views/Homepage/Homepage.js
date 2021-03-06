import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Homepage.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      {" "}
      <h1 className={styles.hello}>Hello world :)</h1>
      <h1 className={styles.me}>
        {" "}
        I'm <span className={styles.name}> Małgorzata Władyka</span>
        .replace(<span className={styles.replace}>/ł/</span>g,'l');
      </h1>
      <p className={styles.comment}>// about me in 3 words: </p>
      <h1 className={styles.info}> I'm junior web developer.</h1>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Homepage, Component as HomepageComponent };

import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./Footer.module.scss";

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        <b> Copyright Malgorzata Wladyka 2021 </b>
      </p>{" "}
    </footer>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Footer, Component as FooterComponent };

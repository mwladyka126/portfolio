import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";

import styles from "./Footer.module.scss";

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          <b>Copyright mwladyka 2021 </b>
        </p>
        <a
          href="https://github.com/mwladyka126"
          target="_blanket"
          className={styles.iconWrapper}
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/malgorzata-wladyka/"
          target="_blanket"
          className={styles.iconWrapper}
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </div>
    </footer>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Footer, Component as FooterComponent };

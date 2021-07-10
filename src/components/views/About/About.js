import React from "react";
import PropTypes from "prop-types";
import { Technologies } from "./../../features/Technologies/Technologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobeAmericas,
  faPepperHot,
  faShoePrints,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./About.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.intro}>
      <h2>/* About me: */</h2>
      <p>
        {" "}
        I am lawyer by training and junior web developer by passion,
        systematically programming, on both front- and back-end stack since
        2020. For a long time I’ve been fascinated by the endless possibilities
        of the IT world, dipping my toes into office software applications in
        the roles of a tester, which ignited my passion for the field. Last
        year, I began a nine-month-long Web Development Bootcamp, a very intense
        and practice-oriented course that equipped me with essential knowledge
        to start my new journey. I'm an ambitious, highly motivated and
        hard-working person, eager to learn new technologies and open to new
        challenges. Through my previous work experience, I proved myself to be a
        reliable, well-organized and stress-resistant team-player with strong
        interpersonal skills. I’d be happy to use all my assets in the role of a
        junior programmer.
      </p>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <Link
            to={"/projects"}
            variant="subtitle1"
            color="secondary"
            className={styles.link}
          >
            SEE MY PROJECTS
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.socialmedia}>
      <div className={styles.socialmedia__item}>
        <p> More on github:</p>
        <a
          href="https://github.com/mwladyka126"
          target="_blanket"
          className={styles.iconWrapper}
        >
          {" "}
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>{" "}
      <div className={styles.socialmedia__item}>
        <p> Check my linkedIn:</p>{" "}
        <a
          href="https://www.linkedin.com/in/malgorzata-wladyka/"
          target="_blanket"
          className={styles.iconWrapper}
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
      </div>
    </div>
    <Technologies />
    <div className={styles.languages}>
      <h2>/* Languages: */</h2>
      <div className={styles.list}>
        <p>
          {" "}
          German <span>// fluent </span>
        </p>
        <p>
          {" "}
          English <span>// fluent </span>{" "}
        </p>
        <p>
          {" "}
          Polish <span>// native </span>{" "}
        </p>
        <p>
          {" "}
          Spanish <span>// advanced </span>{" "}
        </p>
        <p>
          {" "}
          Portuguese <span>// basic </span>
        </p>
      </div>
    </div>
    <div className={styles.passions}>
      <h2>/* Also passionate about */</h2>
      <p>
        {" "}
        Latin America{" "}
        <FontAwesomeIcon icon={faGlobeAmericas} className={styles.icon} />(
        especially <span> Mexico </span>{" "}
        <FontAwesomeIcon icon={faPepperHot} className={styles.icon} />) and
        dancing <FontAwesomeIcon icon={faMusic} className={styles.icon} />
        (mostly <span>urbankiz & kizomba </span>).
        <FontAwesomeIcon icon={faShoePrints} className={styles.icon} />{" "}
      </p>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as About, Component as AboutComponent };

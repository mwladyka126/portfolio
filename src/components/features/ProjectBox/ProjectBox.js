import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import clsx from "clsx";

import styles from "./ProjectBox.module.scss";

const Component = ({
  className,
  id,
  title,
  description,
  technologies,
  code,
  link,
  image,
}) => (
  <div className={clsx(className, styles.root)}>
    <Grid container spacing={2} className={styles.project}>
      <Grid item xs={12} sm={6} md={4} className={styles.project__imageWrapper}>
        <CardMedia
          className={styles.image}
          component="img"
          image={image}
          title={title}
        />
        <div className={styles.buttons}>
          <Button variant="contained" className={styles.button}>
            <a href={link} target="_blanket" className={styles.iconWrapper}>
              link
              <FontAwesomeIcon icon={faLink} className={styles.icon} />
            </a>
          </Button>
          <Button variant="contained" className={styles.button}>
            <a href={code} target="_blanket" className={styles.iconWrapper}>
              code
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={8} className={styles.project__description}>
        <h2> {title}</h2>
        <h3> // about: </h3>
        <p>{description}</p>
        <h3> // technologies: </h3>
        <p>{technologies} </p>
      </Grid>
    </Grid>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string,
  link: PropTypes.string,
  code: PropTypes.string,
  image: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProjectBox,
  // Container as ProjectBox,
  Component as ProjectBoxComponent,
};

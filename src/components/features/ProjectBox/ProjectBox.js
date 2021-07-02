import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as ReactLogo } from "./../../../logos/mongodb.svg";
import { ReactComponent as GithubLogo } from "./../../../logos/github.svg";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

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
    <Paper elevation={3}>
      <Grid container spacing={2} className={styles.project}>
        <Grid item xs={12} sm={6} className={styles.project__imageWrapper}>
          <CardMedia
            className={styles.image}
            component="img"
            image={image}
            title={title}
          />
          <div className={styles.buttons}>
            <Button variant="contained" className={styles.button}>
              <a href={link} target="_blanket" className={styles.iconWrapper}>
                <p>
                  {" "}
                  <b>link</b>{" "}
                </p>
                <FontAwesomeIcon icon={faLink} className={styles.icon} />
              </a>
            </Button>
            <Button variant="contained" className={styles.button}>
              <a href={code} target="_blanket" className={styles.iconWrapper}>
                <b> code </b>
                <GithubLogo className={styles.icon} />
              </a>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.project__description}>
          <h3> Title: </h3>
          <p>{title} </p>
          <h3> About: </h3>
          <p>{description}</p>
          <h3> Technologies: </h3>
          <p>{technologies} </p>
        </Grid>
      </Grid>
    </Paper>
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

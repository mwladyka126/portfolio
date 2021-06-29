import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
            <Button
              variant="contained"
              className={styles.button}
              component={Link}
              to={link}
            >
              link
              <FontAwesomeIcon icon={faTrash} className={styles.icon} />
            </Button>
            <Button
              variant="contained"
              className={styles.button}
              component={Link}
              to={code}
            >
              Code
              <FontAwesomeIcon icon={faTrash} className={styles.icon} />
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.project__description}>
          {" "}
          <h3> Title: </h3>
          <p>{title} </p>
          <h3> About: </h3>
          <p>{description}</p>
          <h3> Technologies: </h3>
          <p>{technologies} </p>
          <p>Code: {code}</p>
          <p>Link: {link}</p>
          <div className={styles.iconWrapper}>
            {" "}
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
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

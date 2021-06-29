import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
      <Grid container spacing={3} className={styles.project}>
        <Grid item xs={12} sm={6} className={styles.project__imageWrapper}>
          <CardMedia
            className={styles.image}
            component="img"
            image={image}
            title={title}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={styles.project__description}>
          <p>Title: {title} </p>
          <p>About:{description}</p>
          <p>Technologies:{technologies} </p>
          <p>Code: {code}</p>
          <p>Link: {link}</p>
        </Grid>
      </Grid>
    </Paper>
  </div>
);

Component.propTypes = {
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
  Component as ProjectBox,
  // Container as ProjectBox,
  Component as ProjectBoxComponent,
};

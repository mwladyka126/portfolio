import React from "react";
import PropTypes from "prop-types";
import { Technologies } from "./../../features/Technologies/Technologies";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./About.module.scss";

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>About me:</h2>
    <p>
      {" "}
      I am lawyer by training and junior web developer by passion,
      systematically programming, on both front- and back-end stack since 2020.
      For a long time I’ve been fascinated by the endless possibilities of the
      IT world, dipping my toes into office software applications in the roles
      of a tester, which ignited my passion for the field. Last year, I began a
      nine-month-long Web Development Bootcamp, a very intense and
      practice-oriented course that equipped me with essential knowledge to
      start my new journey. I'm an ambitious, highly motivated and hard-working
      person, eager to learn new technologies and open to new challenges.
      Through my previous work experience, I proved myself to be a reliable,
      well-organized and stress-resistant team-player with strong interpersonal
      skills. I’d be happy to use all my assets in the role of a junior
      programmer.
    </p>
    <p> See my github:</p>
    <p> More on linkedIn:</p>
    <Technologies />
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
  Component as About,
  // Container as About,
  Component as AboutComponent,
};
import React from "react";
import PropTypes from "prop-types";

import { ProjectBox } from "../../features/ProjectBox/ProjectBox";

import clsx from "clsx";

import { connect } from "react-redux";

import styles from "./Projects.module.scss";

const Component = ({ className, projects }) => (
  <div className={clsx(className, styles.root)}>
    {projects.map((project) => (
      <ProjectBox
        key={project.id}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        code={project.code}
        link={project.link}
        image={project.image}
      />
    ))}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.array,
};

const mapStateToProps = (state) => ({
  projects: state.projects.data,
});

const Container = connect(mapStateToProps)(Component);

export { Container as Projects, Component as ProjectsComponent };

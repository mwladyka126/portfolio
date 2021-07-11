import React from "react";
import { shallow } from "enzyme";
import { ProjectsComponent } from "./Projects";

describe("Component Projects", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <ProjectsComponent
        projects={[
          {
            id: "8",
            title: "Portfolio",
            description:
              "My portfolio website where you can see the projected I worked on so far and get to know me better.Project created with React, maintaing app state in Redux, applying React-Router for routing. ",
            technologies: " HTML, CSS, SASS, JS, React, React-Router, Redux",
            code: "https://github.com/mwladyka126/portfolio",
            link: "https://mwladyka-portfolio.herokuapp.com/",
            image: "/images/projects/portfolio.jpg",
          },
        ]}
      />
    );
    expect(component).toBeTruthy();
  });
});

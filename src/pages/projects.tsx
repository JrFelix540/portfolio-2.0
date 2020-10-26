import React, { Fragment } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";

const ProjectsPage: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <Projects />
        </Fragment>
    );
};

export default ProjectsPage;

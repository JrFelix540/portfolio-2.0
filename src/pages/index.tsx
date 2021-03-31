import React, { Fragment } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
const Index: React.FC = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <Projects />
            <Contact />
        </Fragment>
    );
};

export default Index;

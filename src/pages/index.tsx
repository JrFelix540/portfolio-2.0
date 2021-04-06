import React, { Fragment } from "react";
import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
const Index: React.FC = () => {
    return (
        <Fragment>
            <Head>
                <title>Junior Felix | Portfolio</title>
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Junior Felix | Portfolio website"
                />
                <meta
                    property="og:description"
                    content="A portfolio website created by Junior Felix"
                />
                <meta
                    name="description"
                    content="A portfolio website created by Junior Felix"
                />
                <link rel="icon" type="image/png" sizes="32x32" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./img/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="./img/favicon-16x16.png"
                />
                <meta property="og:image" content="./img/banner.png"></meta>
            </Head>
            <Header />
            <Hero />
            <Projects />
            <Contact />
        </Fragment>
    );
};

export default Index;

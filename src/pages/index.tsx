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

                <meta
                    name="description"
                    content="A portfolio website created by Junior Felix"
                />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Junior Felix" />
                <meta
                    property="og:title"
                    content="Junior Felix | Portfolio website"
                />
                <meta
                    property="og:description"
                    content="A portfolio website created by Junior Felix"
                />
                <meta
                    property="og:image"
                    content="https://junior-felix.vercel.app/img/banner.png"
                />
                <meta
                    property="og:url"
                    content="https://junior-felix.vercel.app/"
                />
            </Head>
            <Header />
            <Hero />
            <Projects />
            <Contact />
        </Fragment>
    );
};

export default Index;

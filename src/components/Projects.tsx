import { Flex, Text } from "@chakra-ui/core";
import React, { Fragment } from "react";
import { Container } from "./Container";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <Fragment>
            <Flex justifyContent="center" m="40px 0">
                <Text>Projects</Text>
            </Flex>
            <Container maxW="1140px" mb="40px">
                <ProjectCard />
            </Container>
        </Fragment>
    );
};

export default Projects;

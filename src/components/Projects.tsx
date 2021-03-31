import { Flex, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { Container } from "./Container";
import ProjectCard from "./ProjectCard";
import {
    featuredProjects,
    archivedProjects
} from "../content/projects-content";
import MiniProjectCard from "./MiniProjectCard";

const Projects: React.FC = () => {
    return (
        <Fragment>
            <Flex justifyContent="center" m="40px 0">
                <Text fontSize="20px" fontWeight="900">
                    Projects
                </Text>
            </Flex>
            <Container mb="40px">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                <Text
                    textAlign="center"
                    fontSize="18px"
                    fontWeight="700"
                    mb="20px"
                >
                    Archived Projects
                </Text>
                {<MiniProjectCard projects={archivedProjects} />}
            </Container>
        </Fragment>
    );
};

export default Projects;

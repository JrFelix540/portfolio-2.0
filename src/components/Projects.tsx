import { Flex, Text } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { Container } from "./Container";
import ProjectCard from "./ProjectCard";

export interface IProject {
    id: number;
    title: string;
    description: string;
    linkUrl: string;
    visitUrl: string;
    coverage: string;
}

const Projects: React.FC = () => {
    const [projectsContent, setProjectsContent] = useState<IProject[]>([
        {
            id: 1,
            title: "Bookclub",
            description:
                "A community/discussion-first approach to discussing books",
            linkUrl: "projects/bookclub",
            visitUrl: "https://bookclub-web.vercel.app",
            coverage: "full-stack"
        }
    ]);
    return (
        <Fragment>
            <Flex justifyContent="center" m="40px 0">
                <Text>Projects</Text>
            </Flex>
            <Container maxW="1140px" mb="40px">
                {projectsContent.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Container>
        </Fragment>
    );
};

export default Projects;

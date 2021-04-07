import {
    Box,
    Flex,
    Text,
    Link as ChakraLink,
    Img,
    useColorMode
} from "@chakra-ui/react";
import { Github, Link45deg } from "@styled-icons/bootstrap";
import React, { Fragment } from "react";
import { IProject } from "../content/projects-content";
interface ProjectCardProps {
    project: IProject;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { colorMode } = useColorMode();
    const bgColor = { light: "gray.100", dark: "gray.900" };
    const tagColor = { light: "#333", dark: "rgba(255, 255, 255, 0.16)" };
    return (
        <Fragment>
            <Flex
                w="100%"
                direction={{ base: "column-reverse", lg: "row" }}
                mb={{ base: "40px", xl: "60px" }}
                boxShadow="0px 9px 24px rgba(0,0,0, .04)"
            >
                <Flex
                    direction="column"
                    p="50px 30px 0 30px"
                    h="100%"
                    w={{ base: "100%", lg: "35%" }}
                >
                    <Box mb="20px">
                        <Text fontSize="24px" fontWeight="900">
                            <ChakraLink href={project.visitUrl} target="blank">
                                {project.title}
                            </ChakraLink>
                        </Text>
                        <Text fontSize="16px">{project.description}</Text>
                    </Box>
                    <Flex mt="5px">
                        {project.tags.map((tag) => (
                            <Text
                                fontSize="14px"
                                mr="10px"
                                color={tagColor}
                                textTransform="uppercase"
                                key={tag.id}
                            >
                                {tag.tag}
                            </Text>
                        ))}
                    </Flex>

                    <Flex mt="10px">
                        <ChakraLink
                            href={project.githubUrl}
                            target="blank"
                            mr="10px"
                        >
                            <Github size="30" />
                        </ChakraLink>
                        <ChakraLink href={project.visitUrl} target="blank">
                            <Link45deg size="30" />
                        </ChakraLink>
                    </Flex>
                </Flex>
                <Flex
                    backgroundColor={bgColor[colorMode]}
                    h={{ base: "250px", lg: "350px" }}
                    justifyContent="center"
                    w={{ base: "100%", lg: "65%" }}
                >
                    <ChakraLink
                        href={project.visitUrl}
                        target="blank"
                        display="flex"
                        justifyContent="center"
                    >
                        <Img height="100%" src={project.imageUrl} alt="" />
                    </ChakraLink>
                </Flex>
            </Flex>
        </Fragment>
    );
};

export default ProjectCard;

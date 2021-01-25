import {
    Box,
    Flex,
    Text,
    Link as ChakraLink,
    Grid,
    Img,
    useColorMode
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { IProject } from "./Projects";
interface ProjectCardProps {
    project: IProject;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { colorMode } = useColorMode();
    const bgColor = { light: "gray.100", dark: "gray.900" };

    return (
        <Fragment>
            <Flex
                w="100%"
                direction={{ base: "column-reverse", lg: "row" }}
                mb={{ base: "20px", xl: "40px" }}
                boxShadow="0px 9px 24px rgba(0,0,0, .04)"
            >
                <Flex direction="column" p="50px 30px 0 30px" h="100%">
                    <Box mb="20px">
                        <Text fontSize="18px" color="gray.500" mb="10px">
                            {project.coverage}
                        </Text>
                        <Text fontSize="20px" fontWeight="900">
                            {project.title}
                        </Text>
                        <Text fontSize="16px">{project.description}</Text>
                    </Box>
                    <Box>
                        <ChakraLink href={project.linkUrl}>Details</ChakraLink>
                    </Box>
                </Flex>
                <Flex
                    backgroundColor={bgColor[colorMode]}
                    h={{ base: "250px", lg: "400px" }}
                    justifyContent="center"
                >
                    <ChakraLink
                        href={project.visitUrl}
                        display="flex"
                        justifyContent="center"
                    >
                        <Img
                            height="100%"
                            src="./img/burgerscreenshot.png"
                            alt=""
                        />
                    </ChakraLink>
                </Flex>
            </Flex>
        </Fragment>
    );
};

export default ProjectCard;

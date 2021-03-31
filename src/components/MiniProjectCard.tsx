import { Box, Flex, Grid, Link, Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import { Folder, Link45deg, Github } from "@styled-icons/bootstrap";
import { IProject } from "../content/projects-content";

interface MiniProjectCardProps {
    projects: IProject[];
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({ projects }) => {
    const bgColor = { light: "#F0F0F0", dark: "gray.700" };
    const tagColor = { light: "#333", dark: "rgba(255, 255, 255, 0.16)" };
    return (
        <Fragment>
            <Grid
                gridTemplateColumns={{
                    base: "1fr",
                    lg: "repeat(3, 1fr)"
                }}
                gridColumnGap="10px"
                gridRowGap="20px"
            >
                {projects.map((project) => (
                    <Box
                        key={project.id}
                        backgroundColor={bgColor}
                        padding="20px"
                        boxShadow="0px 9px 24px rgba(0,0,0, .04)"
                        borderRadius="10px"
                    >
                        <Flex justifyContent="space-between" mb="25px">
                            <Box>
                                <Folder size="24" />
                            </Box>
                            <Flex>
                                <Link href={project.visitUrl} mr="10px">
                                    <Link45deg size="24" />
                                </Link>
                                {project.githubUrl.length > 0 && (
                                    <Link href={project.githubUrl}>
                                        <Github size="24" />
                                    </Link>
                                )}
                            </Flex>
                        </Flex>
                        <Text fontSize="18px" fontWeight="900" mb="10px">
                            {project.title}
                        </Text>
                        <Text minH="200px">{project.description}</Text>
                        <Flex>
                            {project.tags.map((tag) => (
                                <Text
                                    key={tag.id}
                                    fontSize="14px"
                                    mr="10px"
                                    color={tagColor}
                                    textTransform="uppercase"
                                >
                                    {tag.tag}
                                </Text>
                            ))}
                        </Flex>
                    </Box>
                ))}
            </Grid>
        </Fragment>
    );
};

export default MiniProjectCard;

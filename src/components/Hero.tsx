import { Box, Button, Text, Link as ChakraLink, Flex } from "@chakra-ui/core";
import React, { Fragment } from "react";
import { Container } from "./Container";

const Hero: React.FC = () => {
    return (
        <Fragment>
            <Container maxW="1140px">
                <Box pt="100px">
                    <Box display="flex">
                        <Text fontSize="36px" mr="5px">
                            Hey, I'm Junior Felix, a
                        </Text>
                        <Text
                            fontSize="36px"
                            fontWeight="700"
                            textTransform="uppercase"
                        >
                            Web Developer
                        </Text>
                    </Box>
                    <Flex fontSize="24px" mb="20px">
                        <Text mr="5px">I use</Text>{" "}
                        <Text mr="5px" fontWeight="700">
                            React (Typescript)
                        </Text>
                        and{" "}
                        <Text fontWeight="700" ml="5px" mr="5px">
                            Express / Node
                        </Text>
                        <Text> to build websites. </Text>
                    </Flex>

                    <Box>
                        <ChakraLink
                            href="mailto:juniorfelix8825@outlook.com"
                            mr="15px"
                        >
                            <Button variant="solid" variantColor="teal">
                                Talk to Me!
                            </Button>
                        </ChakraLink>
                        <ChakraLink href="/projects">
                            <Button>See my Work</Button>
                        </ChakraLink>
                    </Box>
                </Box>
            </Container>
        </Fragment>
    );
};

export default Hero;

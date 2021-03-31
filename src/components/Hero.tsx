import { Box, Button, Text, Link as ChakraLink, Flex } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Container from "./Container";
const Hero: React.FC = () => {
    return (
        <Fragment>
            <Container>
                <Box pt="50px">
                    <Flex>
                        <Text
                            fontSize={{ base: "20px", md: "24px", xl: "36px" }}
                            mr="5px"
                            fontWeight="900"
                        >
                            Hey, I'm Junior Felix, a Web Developer
                        </Text>
                    </Flex>
                    <Text
                        fontSize={{ base: "16px", md: "18px", xl: "24px" }}
                        mb="20px"
                    >
                        I use React (Typescript) and Express / Node to build
                        websites.
                    </Text>

                    <Box>
                        <ChakraLink
                            href="mailto:juniorfelix8825@outlook.com"
                            mr="15px"
                        >
                            <Button variant="solid" backgroundColor="teal">
                                Talk to Me!
                            </Button>
                        </ChakraLink>
                    </Box>
                </Box>
            </Container>
        </Fragment>
    );
};

export default Hero;

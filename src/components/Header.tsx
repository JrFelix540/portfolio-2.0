import { Flex, List, Link as ChakraLink } from "@chakra-ui/core";
import React, { Fragment } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { Container } from "./Container";

const Header: React.FC = () => {
    return (
        <Fragment>
            <Container maxW="1140px">
                <Flex
                    margin="20px 10px"
                    direction="row"
                    justifyContent="space-between"
                >
                    <DarkModeSwitch />
                    <Flex>
                        <List>
                            <ChakraLink href="/" marginRight="15px">
                                Home
                            </ChakraLink>
                            <ChakraLink href="/projects" marginRight="15px">
                                Projects
                            </ChakraLink>
                            <ChakraLink href="mailto:juniorfelix8825@outlook.com">
                                Contact Me
                            </ChakraLink>
                        </List>
                    </Flex>
                </Flex>
            </Container>
        </Fragment>
    );
};

export default Header;

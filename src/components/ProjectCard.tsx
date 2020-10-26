import {
    Box,
    Flex,
    Text,
    Link as ChakraLink,
    Grid,
    Img,
    useColorMode
} from "@chakra-ui/core";
import React, { Fragment } from "react";

const ProjectCard: React.FC = () => {
    const { colorMode } = useColorMode();
    const bgColor = { light: "gray.100", dark: "gray.900" };

    return (
        <Fragment>
            <Grid
                gridTemplateColumns="1fr 2fr"
                w="100%"
                boxShadow="0px 9px 24px rgba(0,0,0, .04)"
            >
                <Flex direction="column" p="50px 30px 0 30px" h="100%">
                    <Box mb="20px">
                        <Text fontSize="18px" color="gray.500" mb="10px">
                            Full stack
                        </Text>
                        <Text fontSize="20px" fontWeight="900">
                            Burger Restaurant
                        </Text>
                        <Text fontSize="16px">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis.
                        </Text>
                    </Box>
                    <Box>
                        <ChakraLink href="/">Details</ChakraLink>
                    </Box>
                </Flex>
                <Flex
                    backgroundColor={bgColor[colorMode]}
                    h="400px"
                    justifyContent="center"
                >
                    <ChakraLink href="/" display="flex" justifyContent="center">
                        <Img
                            height="100%"
                            src="./img/burgerscreenshot.png"
                            alt=""
                        />
                    </ChakraLink>
                </Flex>
            </Grid>
        </Fragment>
    );
};

export default ProjectCard;

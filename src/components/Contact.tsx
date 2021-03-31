import React, { Fragment } from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { EnvelopeFill, Discord } from "@styled-icons/bootstrap";

const Contact: React.FC = () => {
    return (
        <Fragment>
            <Text fontSize="20px" fontWeight="900" textAlign="center" mb="40px">
                Contact Me
            </Text>
            <Flex justifyContent="center" mb="20px">
                <Link href="mailto:juniorfelix8825@outlook.com">
                    <EnvelopeFill size={30} />
                </Link>
                <Flex ml="20px">
                    <Discord size={30} />
                    <Text fontSize="14px" ml="5px">
                        juniorfelix#3092
                    </Text>
                </Flex>
            </Flex>
        </Fragment>
    );
};

export default Contact;

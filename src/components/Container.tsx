import { Box, BoxProps } from "@chakra-ui/react";

export const Container: React.FC<BoxProps> = (props) => {
    return (
        <Box
            margin="0 auto"
            maxW="1200px"
            p={{ base: "20px", xl: "0px" }}
            {...props}
        >
            {props.children}
        </Box>
    );
};

export default Container;

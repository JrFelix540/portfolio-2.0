import { Box, BoxProps } from "@chakra-ui/react";

export const Container: React.FC<BoxProps> = (props) => {
    return (
        <Box
            margin="0 auto"
            maxW={{ base: "0px", md: "700px", lg: "900px", xl: "1200px" }}
            p={{ base: "20px", xl: "0px" }}
            {...props}
        >
            {props.children}
        </Box>
    );
};

export default Container;

import { Box } from "@chakra-ui/react";

export const Container: React.FC = ({ children }) => {
    return (
        <Box margin="0 auto" maxW="1200px" p={{ base: "20px", xl: "0px" }}>
            {children}
        </Box>
    );
};

export default Container;

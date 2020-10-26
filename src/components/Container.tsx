import { Box, FlexProps } from "@chakra-ui/core";

type ContainerProps = FlexProps & {
    maxW: string;
};

export const Container = (props: ContainerProps) => {
    return <Box margin="0 auto" {...props} />;
};

import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em"
});

const theme = {
    ...chakraTheme,
    colors: {
        ...chakraTheme.colors,
        black: "#16161D"
    },
    fonts,
    breakpoints
};

export default theme;

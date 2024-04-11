import { default as defaultTheme } from "./theme";
import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme(
    {
        logo: "logo.png",

        //Here can override library theme items
    },
    defaultTheme
);

theme.components.Navbar = defineStyleConfig({
    baseStyle: (props) => {
        return {
            bg: mode("whiteAlpha.800", "gray.700")(props),

            alignItems: "center",
            top: 0,
            transition: "0.3s",
            position: "fixed",
            direction: "row",
            display: "flex",
            w: "100%",
            // : "Navbar",
            zIndex: 100,
        };
    },
});

export default theme;

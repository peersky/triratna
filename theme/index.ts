import {
    extendTheme,
    useColorModeValue,
    withDefaultColorScheme,
} from "@chakra-ui/react";
import Button from "./Button";
import Tag from "./Tag";
import Menu from "./Menu";
import Input from "./Input";
// import Spinner from "./Spinner";
import NumberInput from "./NumberInput";
import Badge from "./Badge";
import Checkbox from "./Checkbox";
import Table from "./Table";
import Tooltip from "./Tooltip";
import Spinner from "./Spinner";
import Heading from "./Heading";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";


const Accordion = {
    parts: ["container", "panel", "button"],
    baseStyle: {
        container: { borderColor: "white.300" },
        panel: { pb: 4 },
    },

};

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "blue" }), {
    breakpoints: {
        base: "0em",
        sm: "24em", //Mobile phone
        md: "64.01em", //Tablet or rotated phone
        lg: "89.9em", //QHD
        xl: "160em", //4k monitor
        "2xl": "192em", // Mac Book 16" and above
    },
    config: {
        initialColorMode: "system",
        useSystemColorMode: true,
    },
    defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "grey", // default is grey
        // color: "grey.900",
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                color: mode("grey.800", "whiteAlpha.700")(props),
                backgroundColor: mode("white.100", "grey.900")(props),
            },
        }),
    },

    components: {
        Button,
        Accordion,
        Menu,
        Input,
        Tag,
        NumberInput,
        Badge,
        Checkbox,
        Table,
        Spinner,
        Tooltip,
        Heading,
        Link: {
            baseStyle: (props: StyleFunctionProps) => {
                return { textColor: mode("grey.600", "grey.200")(props) };
            },
        },
        Navbar: {
            colorScheme: "grey",
        },
        Footer: {
            colorScheme: "grey",
        },
    },

    logo: "daocoacoa.png",

    fonts: {
        heading: '"Work Sans", sans-serif',
        body: '"Work Sans", sans-serif',
        mono: '"Work Sans", monospace',
    },
    fontSizes: {
        xs: "0.625rem", //10px
        sm: "0.875rem", //14px
        md: "1rem", //16px
        lg: "1.25rem", //20px
        xl: "1.375rem", //22
        "2xl": "1.5rem", //24px
        "3xl": "1.625rem", //26
        "4xl": "1.875rem", //30px
        "5xl": "2.625rem", //42px
        "6xl": "3.75rem", //60px
        "7xl": "4.5rem", //72px
    },

    colors: {
        blue: {
            0: "#FAFFFF",
            50: "#E5F8FF",
            100: "#B8EBFF",
            200: "#8ADDFF",
            300: "#5CD0FF",
            400: "#2EC3FF",
            500: "#00B6FF",
            600: "#0092CC",
            700: "#006D99",
            800: "#004966",
            900: "#002433",
        },
        red: {
            0: "#FFFFF1",
            50: "#FDEDE8",
            100: "#F8CCBE",
            200: "#F4AB94",
            300: "#F08A6B",
            400: "#EC6941",
            500: "#E84817",
            600: "#B93A13",
            700: "#8B2B0E",
            800: "#5D1D09",
            900: "#2E0E05",
        },
        orange: {
            0: "#FFFFF1",
            50: "#FFF7E5",
            100: "#FFE0BE",
            200: "#FFC794",
            300: "#FFAF6A",
            400: "#FF993F",
            500: "#FF8314",
            600: "#D66012",
            700: "#B13E0F",
            800: "#8C1B0D",
            900: "#66090A",
        },
        yellow: {
            0: "#FFFFF0",
            50: "#FDF7E8",
            100: "#F8EABE",
            200: "#F4DC94",
            300: "#F0CE6B",
            400: "#ECC041",
            500: "#E8B217",
            600: "#B98F13",
            700: "#8B6B0E",
            800: "#5D4709",
            900: "#2E2405",
        },
        pink: {
            0: "#FFFFF1",
            50: "#FFEDF5",
            100: "#FFD1E7",
            200: "#FFB4D9",
            300: "#FF98CB",
            400: "#FF7CBF",
            500: "#FF60B2",
            600: "#DB4892",
            700: "#B73272",
            800: "#932752",
            900: "#6F1232",
        },
        grey: {
            0: "#FFFFFF",
            50: "#F0F2F4",
            100: "#D6DAE1",
            200: "#BCC2CD",
            300: "#A1AABA",
            400: "#8792A6",
            500: "#6C7A93",
            600: "#576175",
            700: "#414958",
            800: "#2B313B",
            900: "#16181D",
        },
        green: {
            0: "#F5FFF5",
            50: "#BFFFBF",
            100: "#8FFF8F",
            200: "#5FFF5F",
            300: "#2FFF2F",
            400: "#00CC00",
            500: "#009900",
            600: "#006600",
            700: "#003300",
            800: "#001A00",
            900: "#001A00",
        },
    },
});

export default theme;

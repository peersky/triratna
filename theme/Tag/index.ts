import { ChakraStyledOptions } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const subtleVariant = (props: ChakraStyledOptions) => {
    return {
        bg: `white.200`,
        boxShadow: "sm",
        transition: "0.1s",
        _hover: {
            bg: `white.300`,
        },
    };
};

const outlinedVariant = (props: ChakraStyledOptions) => {
    const { colorScheme: c } = props;
    return {
        // borderBlock: "Window",
        borderWidth: "1px",
        textColor: mode(`${c}.700`, `${c}.600`)(props),
        bg: `white.200`,
        boxShadow: "sm",
        borderColor: mode(`${c}.600`, `${c}.600`)(props),
        transition: "0.1s",
        _hover: {
            bg: `white.300`,
        },
    };
};

const Tag = {
    parts: ["container", "label", "closeButton"],
    baseStyle: {
        container: {
            m: 1,
        },
    },

    variants: {
        subtle: (props: ChakraStyledOptions) => ({
            container: subtleVariant(props),
        }),
        outline: (props: ChakraStyledOptions) => ({
            container: outlinedVariant(props),
        }),
    },
};

export default Tag;

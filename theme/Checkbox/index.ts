import {ChakraStyledOptions} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const baseStyleControl = (props: ChakraStyledOptions) => {
    const {colorScheme: c} = props;

    return {
        w: "100%",
        transition: "box-shadow 250ms",
        border: "2px solid",
        borderRadius: "sm",
        borderColor: "inherit",
        color: "white",

        _checked: {
            bg: mode(`${c}.500`, `${c}.200`)(props),
            borderColor: mode(`${c}.500`, `${c}.200`)(props),
            color: mode("white", "grey.1200")(props),

            _hover: {
                bg: mode(`${c}.600`, `${c}.300`)(props),
                borderColor: mode(`${c}.600`, `${c}.300`)(props),
            },

            _disabled: {
                borderColor: mode("grey.50", "transparent")(props),
                bg: mode("grey.50", "whiteAlpha.300")(props),
                color: mode("grey.1200", "whiteAlpha.500")(props),
            },
        },

        _indeterminate: {
            bg: mode(`${c}.500`, `${c}.200`)(props),
            borderColor: mode(`${c}.500`, `${c}.200`)(props),
            color: mode("white", "grey.1200")(props),
        },

        _disabled: {
            bg: mode("grey.100", "whiteAlpha.100")(props),
            borderColor: mode("grey.100", "transparent")(props),
        },

        _focus: {
            boxShadow: "outline",
        },

        _invalid: {
            borderColor: mode("red.500", "red.300")(props),
        },
    };
};

const Checkbox = {
    // 1. We can update the base styles
    baseStyle: (props: ChakraStyledOptions) => ({
        control: baseStyleControl(props),
    }),
    defaultProps: {
        colorScheme: "blue",
    },
};

export default Checkbox;

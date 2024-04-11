import { ChakraStyledOptions } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
const flushedVariant = (props: ChakraStyledOptions) => {
    const { colorScheme: c } = props;
    return {
        field: {
            px: "6px",
            bg: mode(`${c}.300`, `${c}.900`)(props),
            borderBottom: "0px solid",
            borderColor: `none`,
            outline: 0,
            borderRadius: "md",
            color: mode(`${c}.900`, `${c}.500`)(props),
            _focus: {
                borderColor: `none`,
                outline: 0,
            },
            _hover: {
                // borderColor: `${c}.50`,
                bg: mode(`${c}.400`, `${c}.800`)(props),
                borderBottom: "0px solid",
                borderColor: `none`,
                outline: 0,
            },
            _placeholder: { color: mode(`${c}.900`, `${c}.500`)(props) },
        },
    };
};

const outlineVariant = (props: ChakraStyledOptions) => {
    const { colorScheme: c, theme } = props;
    const bgColor = transparentize(`${c}.50`, 0.8)(theme);
    const bgColorHover = transparentize(`${c}.50`, 0.7)(theme);
    return {
        field: {
            // bg: bgColor,
            borderColor: mode(`${c}.900`, `${c}.50`)(props),
            borderWidth: "1px",
            _placeholder: { color: mode(`${c}.900`, `${c}.500`)(props) },
            _focus: {
                // textDecoration: "underline",
                // outline: "none",
                // color: `white.100`,
            },
            _hover: {
                // borderColor: `${c}.100`,
                // bg: bgColorHover,
                // borderWidth: 0,
            },
        },
    };
};

const newTagVariant = () => {
    return {
        field: {
            maxW: "150px",
            fontWidth: 800,
        },
    };
};

const filledVariant = (props: ChakraStyledOptions) => {
    const { colorScheme: c, theme } = props;
    return {
        field: {
            color: mode(`${c}.800`, `${c}.200`)(props),
            bg: mode(`${c}.200`, `${c}.800`)(props),
            _hover: {
                bg: mode(`${c}.200`, `${c}.800`)(props),
            },
        },
    };
};

const Input = {
    parts: ["field", "addon"],
    baseStyle: () => {
        return {
            // bg: `${c}.100`,
            addon: {
                bg: `inherit`,
                border: "0px solid",
                borderColor: "inherit",
                // bg: `${c}.100`,
            },
            field: {
                _placeholder: { textColor: "grey.1100" },
            },
        };
    },
    variants: {
        outline: outlineVariant,
        flushed: flushedVariant,
        newTag: newTagVariant,
        filled: filledVariant,
    },

    defaultProps: {
        colorScheme: "blue",
        size: "md",
        variant: "outline",
    },
};

export default Input;

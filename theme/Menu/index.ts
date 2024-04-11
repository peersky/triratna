import { ChakraStyledOptions } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const rounded = (props: ChakraStyledOptions) => {
    const { colorScheme: c } = props;
    return {
        item: {
            overflow: "hidden",
            w: "full",
            px: 6,
            mx: 0,
            bg: mode(`${c}.200`, `${c}.200`)(props),
            placeContent: "space-between",
            // fontWeight: "medium",
            // lineHeight: "normal",
            // textColor: mode(`${c}.200`, `${c}.900`)(props),

            _hover: {
                bg: mode(`${c}.800`, `${c}.200`)(props),
                // textColor: mode(`${c}.100`, `${c}.900`)(props),
            },
            _focus: {
                // bg: `${c}.700`,
                // textColor: `${c}.100`,
            },
        },
        list: {
            zIndex: 1000,
            bg: mode(`${c}.200`, `${c}.900`)(props),
            borderColor: mode(`${c}.50`, `${c}.800`)(props),
            // w: "inherit",
            borderTopRadius: 0,
            borderTopWidth: 0,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderBottomRadius: "33%",
            pb: 10,
            // borderWidth: 0,
            // position: "0",
            // borderBlock: "Window",
        },
    };
};
const Menu = {
    parts: ["list", "item"],
    variants: {
        rounded: rounded,
    },
    baseStyle: (props: ChakraStyledOptions) => {
        const { colorScheme: c } = props;
        return {
            item: {
                w: "full",
                // transition: "0.5s",
                mx: 12,
                overflow: "hidden",
                placeContent: "space-between",
                borderColor: mode(`${c}.300`, `${c}.800`)(props),
                bg: mode(`${c}.200`, `${c}.900`)(props),
                // fontWeight: "medium",
                // lineHeight: "normal",
                // textColor: mode(`${c}.200`, `${c}.900`)(props),

                _hover: {
                    // bg: mode(`${c}.800`, `${c}.200`)(props),
                    bg: mode(`${c}.300`, `${c}.800`)(props),
                    // textColor: mode(`${c}.100`, `${c}.900`)(props),
                },
                _focus: {
                    // bg: `${c}.700`,
                    // textColor: `${c}.100`,
                },
            },
            list: {
                bg: mode(`${c}.200`, `${c}.900`)(props),
                borderColor: mode(`${c}.300`, `${c}.800`)(props),
                // w: "inherit",
                // mx: 2,
                transition: "0s",
                borderTopRadius: 0,
                overflow: "hidden",
                borderTopWidth: 0,
                borderLeftWidth: 3,
                borderRightWidth: 3,
                borderBottomRadius: "33%",
                pb: 5,
                // borderWidth: 0,
                // position: "0",
                // borderBlock: "Window",
            },
        };
    },
    // baseStyle: (props) => {
    //    },
};

export default Menu;

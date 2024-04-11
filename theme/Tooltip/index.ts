import {ChakraStyledOptions} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const baseStyle = (props: ChakraStyledOptions) => {
    const bg = mode("grey.700", "grey.300")(props);
    return {
        "--tooltip-bg": `colors.${bg}`,
        px: "8px",
        py: "2px",
        bg: "var(--tooltip-bg)",
        "--popper-arrow-bg": "var(--tooltip-bg)",
        color: mode("whiteAlpha.900", "grey.900")(props),
        borderRadius: "sm",
        fontWeight: "medium",
        fontSize: "sm",
        boxShadow: "md",
        maxW: "320px",
        zIndex: "tooltip",
    };
};

const variantSuggestion = (props: ChakraStyledOptions) => {
    const bg = mode("blue.700", "blue.300")(props);
    return {
        "--tooltip-bg": `colors.${bg}`,
        px: "8px",
        py: "2px",
        bg: "var(--tooltip-bg)",
        "--popper-arrow-bg": "var(--tooltip-bg)",
        color: mode("whiteAlpha.900", "grey.900")(props),
        borderRadius: "md",
        fontWeight: "medium",
        fontSize: "sm",
        boxShadow: "md",
        maxW: "320px",
        zIndex: "tooltip",
    };
};

const variantOnboarding = (props: ChakraStyledOptions) => {
    const bg = mode("orange.700", "orange.300")(props);
    return {
        "--tooltip-bg": `colors.${bg}`,
        px: "8px",
        py: "2px",
        bg: "var(--tooltip-bg)",
        "--popper-arrow-bg": "var(--tooltip-bg)",
        color: mode("whiteAlpha.900", "grey.900")(props),
        borderRadius: "md",
        fontWeight: "medium",
        fontSize: "sm",
        boxShadow: "md",
        maxW: "320px",
        zIndex: "tooltip",
    };
};

const variants = {
    onboarding: variantOnboarding,
    suggestion: variantSuggestion,
};

const TooltipTheme = {
    baseStyle,
    variants,
};
export default TooltipTheme;

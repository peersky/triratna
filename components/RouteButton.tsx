import React from "react";
import {
    chakra,
    Button,
    ButtonProps,
    Link,
    LinkProps,
    HTMLChakraProps,
    forwardRef,
} from "@chakra-ui/react";
import {
    Link as NextLink,
    LinkProps as NextLinkProps,
} from "@chakra-ui/next-js";

type RouteProps = ButtonProps & LinkProps;

const RouteLink = forwardRef<LinkProps, "div">((props, ref) => (
    <Link as={NextLink} {...props} ref={ref}>
        {props.children}
    </Link>
));
const _RouteButton = forwardRef<RouteProps, "button">((props, ref) =>
    // const _RouteButton = (props: RouteProps) =>
    {
        return (
            <Button as={RouteLink} ref={ref} {...props}>
                {props.children}
            </Button>
        );
    }
);
export const RouteButton = chakra(_RouteButton, {
    label: "button",
});

export default RouteButton;

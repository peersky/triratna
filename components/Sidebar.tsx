import { Sidebar } from "react-pro-sidebar";
import React, { useContext } from "react";
import {
    useColorMode,
    useColorModeValue,
    useTheme,
    Box,
    // MenuItem,
    Button,
    Flex,
} from "@chakra-ui/react";
import { UIContext } from "../providers";
import { SiteMapItem } from "../types";
import RouteButton from "./RouteButton";
import router from "next/router";
import Link from "next/link";
export const _Sidebar = ({
    initialLogo = undefined,
    selectorSchema = undefined,
    metamaskSchema = undefined,
    colorScheme = undefined,
}) => {
    const ui = useContext(UIContext);
    const sitemap = ui.webSiteConfig.SITEMAP;

    const bgC = useColorModeValue(
        "var(--chakra-colors-orange-100);",
        "var(--chakra-colors-blue-900);"
    );
    return (
        <Sidebar
            width="280px"
            backgroundColor={bgC}
            breakPoint="lg"
            hidden={!ui.sidebarVisible}
        >
            <Flex direction="column" px={4} pt={8}>
                {sitemap
                    ?.filter(
                        (item: SiteMapItem) => item.type !== "FOOTER_CATEGORY"
                    )
                    ?.map((item: any, idx: number) => {
                        return (
                            <React.Fragment key={`Fragment-${idx}`}>
                                {!item.children && (
                                    <RouteButton
                                        my={4}
                                        colorScheme={"green"}
                                        w="100%"
                                        key={`${idx}-${item.title}-landing-all-links`}
                                        variant="solid"
                                        href={item.path}
                                        isActive={
                                            !!(router.pathname === item.path)
                                        }
                                    >
                                        {item.title}
                                    </RouteButton>
                                )}
                                {item.children && (
                                    <>
                                        <Box
                                        // h="32px"
                                        // as={Button}
                                        // colorScheme={"blue"}
                                        // w="180px"
                                        // rightIcon={<ChevronDownIcon />}
                                        // variant="menu"
                                        >
                                            {item.title}
                                        </Box>
                                        {/* <Portal> */}

                                        {item.children.map(
                                            (child: any, idx: number) => (
                                                <Link
                                                    shallow={true}
                                                    key={`${idx}-${item.title}-menu-links`}
                                                    href={child.path}
                                                >
                                                    <Button
                                                        py={2}
                                                        variant={"link"}
                                                        colorScheme="yellow"
                                                        key={`menu-${idx}`}
                                                        // m={0}
                                                        ml={4}
                                                    >
                                                        {child.title}
                                                    </Button>
                                                </Link>
                                            )
                                        )}

                                        {/* </Portal> */}
                                    </>
                                )}
                            </React.Fragment>
                        );
                    })}
            </Flex>
            {/* <Menu>
                <Box p={4} alignItems="center">
                    <Divider borderColor="blue.600" />
                    {!!ui.webSiteConfig.ENABLE_WEB3 && (
                        <Box> Network selector:</Box>
                    )}
                </Box>
            </Menu> */}
        </Sidebar>
    );
};

export default _Sidebar;

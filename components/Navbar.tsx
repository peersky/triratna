import React, { useContext, useMemo } from "react";
import { Link } from "@chakra-ui/next-js";
import {
    Button,
    Image,
    ButtonGroup,
    Spacer,
    IconButton,
    Flex,
    Badge,
    Skeleton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal,
    useColorMode,
    useColorModeValue,
    useTheme,
    useMergeRefs,
    Slide,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { UIContext } from "../providers";
import RouteButton from "./RouteButton";
import router from "next/router";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SiteMapItem, SiteMapItemType } from "../types";

import {
    chakra,
    forwardRef,
    HTMLChakraProps,
    omitThemingProps,
    SystemStyleObject,
    ThemingProps,
    useStyleConfig,
} from "@chakra-ui/system";

export interface NavbarOptions {
    selectorSchema?: string;
    metamaskSchema?: string;
}
export interface NavbarProps
    extends HTMLChakraProps<"div">,
        NavbarOptions,
        ThemingProps<"Navbar"> {}

export const Navbar = forwardRef<NavbarProps, "div">((props, ref) => {
    const { selectorSchema, metamaskSchema, className, as, ...rest } =
        omitThemingProps(props);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isMobileView, webSiteConfig, toggleSidebar } =
        useContext(UIContext);
    const sitemap = webSiteConfig.SITEMAP;
    const theme = useTheme();
    const styles = useStyleConfig("Navbar", { ...props });
    const { components } = theme;
    const themeLogo = theme.logo;
    console.warn("eeey", themeLogo, webSiteConfig.DEFAULT_LOGO);
    return (
        <Flex
            ref={ref}
            id="Navbar"
            minH={isMobileView ? "32px" : "62px"}
            maxH={isMobileView ? "32px" : "62px"}
            shadow="outline"
            boxShadow={["md", "lg"]}
            __css={styles}
            {...rest}
        >
            {isMobileView && (
                <>
                    <IconButton
                        alignSelf="flex-start"
                        aria-label="Menu"
                        colorScheme="blue"
                        minH={isMobileView ? "32px" : "62px"}
                        maxH={isMobileView ? "32px" : "62px"}
                        borderRadius="0"
                        borderRightRadius={"33%"}
                        w="48px"
                        m={0}
                        variant="solid"
                        onClick={() => toggleSidebar()}
                        icon={<HamburgerIcon />}
                    />
                </>
            )}
            <Flex
                pl={isMobileView ? 2 : 8}
                justifySelf="flex-start"
                h="50px"
                w="50px"
                py={1}
                // w="200px"
                // minW="200px"
                flexGrow={1}
                id="Logo Container"
            >
                {!isMobileView && (
                    <Link href="/">
                        <Image
                            // as={Link}
                            // w="fit-content"
                            h="100%"
                            justifyContent="left"
                            src={useColorModeValue(
                                `/${webSiteConfig.DEFAULT_LOGO ?? themeLogo}`,
                                `/inverted-${
                                    webSiteConfig.DEFAULT_LOGO ?? themeLogo
                                }`
                            )}
                            // href="/"
                            alt="Logo"
                        />
                    </Link>
                )}
            </Flex>
            <Flex
                pr={14}
                justifyItems="flex-end"
                flexGrow={1}
                alignItems="center"
            >
                {isMobileView && (
                    <Link href="/">
                        <Image
                            // as={Link}
                            // w="fit-content"
                            h="32px"
                            justifyContent="left"
                            src={useColorModeValue(
                                `/${webSiteConfig.DEFAULT_LOGO ?? themeLogo}`,
                                `/inverted-${
                                    webSiteConfig.DEFAULT_LOGO ?? themeLogo
                                }`
                            )}
                            // href="/"
                            alt="Logo"
                        />
                    </Link>
                )}
                <Spacer />
                {!isMobileView && (
                    <>
                        <ButtonGroup variant="solid" spacing={4} pr={4}>
                            {sitemap
                                ?.filter(
                                    (item: SiteMapItem) =>
                                        item.type !== "FOOTER_CATEGORY"
                                )
                                ?.map((item, idx: number) => {
                                    return (
                                        <React.Fragment key={`Fragment-${idx}`}>
                                            {!item.children && (
                                                <RouteButton
                                                    key={`${idx}-${item.title}-landing-all-links`}
                                                    variant="solid"
                                                    colorScheme="green"
                                                    size="sm"
                                                    isExternal={
                                                        item.type === "EXTERNAL"
                                                    }
                                                    href={item.path}
                                                    isActive={
                                                        !!(
                                                            router.pathname ===
                                                            item.path
                                                        )
                                                    }
                                                >
                                                    {item.title}
                                                </RouteButton>
                                            )}
                                            {item.children && (
                                                <Menu
                                                    colorScheme={"blue"}
                                                    matchWidth={true}
                                                    gutter={0}
                                                >
                                                    <MenuButton
                                                        h="32px"
                                                        as={Button}
                                                        colorScheme={"blue"}
                                                        // w="180px"
                                                        rightIcon={
                                                            <ChevronDownIcon />
                                                        }
                                                        variant="menu"
                                                    >
                                                        {item.title}
                                                    </MenuButton>
                                                    {/* <Portal> */}
                                                    <MenuList
                                                        zIndex={100}
                                                        minW="0px"
                                                        m={0}
                                                        pt={0}
                                                    >
                                                        {item.children.map(
                                                            (
                                                                child,
                                                                idx: number
                                                            ) => (
                                                                <Link
                                                                    shallow={
                                                                        true
                                                                    }
                                                                    key={`${idx}-${item.title}-menu-links`}
                                                                    href={
                                                                        child.path
                                                                    }
                                                                >
                                                                    <MenuItem
                                                                        as={
                                                                            Button
                                                                        }
                                                                        key={`menu-${idx}`}
                                                                        m={0}
                                                                    >
                                                                        {
                                                                            child.title
                                                                        }
                                                                    </MenuItem>
                                                                </Link>
                                                            )
                                                        )}
                                                    </MenuList>
                                                    {/* </Portal> */}
                                                </Menu>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                        </ButtonGroup>

                        <IconButton
                            alignSelf="flex-start"
                            aria-label="Menu"
                            colorScheme="blue"
                            size="sm"
                            variant="solid"
                            onClick={toggleColorMode}
                            icon={
                                colorMode === "light" ? (
                                    <MdDarkMode />
                                ) : (
                                    <MdLightMode />
                                )
                            }
                        />
                    </>
                )}
            </Flex>
            {isMobileView && (
                <IconButton
                    // style={{
                    //     // "-webkit-clip-path": "polygon(0% 100%, 100% 100%, 100% 30px, calc(100% - 30px) 0%, 0% 0%)",
                    //     clipPath:
                    //         "polygon(0% 100%, 100% 100%, 100% 15px, calc(100% + 15px) 0%, 0% 0%)",
                    // }}
                    alignSelf="flex-start"
                    aria-label="Menu"
                    colorScheme="blue"
                    size="sm"
                    variant="solid"
                    borderRightRadius={0}
                    m={0}
                    borderLeftRadius="33%"
                    w="48px"
                    onClick={toggleColorMode}
                    icon={
                        colorMode === "light" ? <MdDarkMode /> : <MdLightMode />
                    }
                />
            )}
        </Flex>
        // <Flex w="100px" h="100px" bgColor={"red.100"}>1</Flex>
    );
});
// export const Navbar = chakra(_Navbar);
export default Navbar;

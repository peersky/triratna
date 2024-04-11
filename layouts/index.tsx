import { chakra, Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import React from "react";
import { Footer } from "../components";
import { Navbar } from "../components";
import { Scrollable } from "../components";
import { _Sidebar } from "../components";
import { ChakraComponent } from "@chakra-ui/system";
const _LayoutWrapper = ({
    children,
    ...props
}: {
    children: React.ReactNode;
}) => {
    return (
        <Scrollable className="Main">
            <Navbar minH="10px" />

            <_Sidebar />
            <Flex
                minH="100vh"
                mt="84px"
                direction="column"
                flexGrow={1}
                flexBasis="100px"
                overflowX="hidden"
            >
                <Suspense fallback=""></Suspense>
                {children}
            </Flex>
            <Footer />
        </Scrollable>
    );
};

const LayoutWrapper: ChakraComponent<typeof _LayoutWrapper> =
    chakra(_LayoutWrapper);
export const getDefaultLayout = (page: React.ReactNode) => (
    <LayoutWrapper>{page}</LayoutWrapper>
);
export default LayoutWrapper;

export { getBlogLayout } from "./BlogLayout";
export { getBreadcrumbLayout } from "./BreadcumpLayout";

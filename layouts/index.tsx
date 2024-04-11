import { Box, chakra, Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import React from "react";
import { Footer } from "../components";
import { Navbar } from "../components";
import { Scrollable } from "../components";
import { _Sidebar } from "../components";
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
import { ChakraComponent } from "@chakra-ui/system";

const LayoutWrapper: ChakraComponent<typeof _LayoutWrapper> =
    chakra(_LayoutWrapper);
export const getDefaultLayout = (page: React.ReactNode) => (
    <LayoutWrapper>{page}</LayoutWrapper>
);
export default LayoutWrapper;
export { getAppLayout } from "./AppLayout";
export { getBlogLayout } from "./BlogLayout";
export { getBreadcrumbLayout } from "./BreadcumpLayout";
export { getAdminLayout } from "./AdminLayout";

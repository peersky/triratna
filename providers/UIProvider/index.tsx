import React, { useState, useEffect, useLayoutEffect } from "react";
import { useStorage } from "../../hooks";
import UIContext from "./context";
import { v4 as uuid4 } from "uuid";
import { useBreakpointValue } from "@chakra-ui/react";
import { WebSiteConfig } from "../../types";
import { useProSidebar } from "react-pro-sidebar";

export const UIProvider = ({
    children,
    config,
}: {
    children: React.ReactNode;
    config: WebSiteConfig;
}) => {
    const isMobileView = useBreakpointValue<boolean>(
        {
            base: true,
            sm: true,
            md: false,
            lg: false,
            xl: false,
            "2xl": false,
        },
        { fallback: "md", ssr: false }
    );
    // const isMobileView = true;

    const [searchTerm, setSearchTerm] = useStorage(
        window.sessionStorage,
        "q",
        ""
    );

    const [searchBarActive, setSearchBarActive] = useState(false);

    // ****** Session state *****
    // Whether sidebar should be toggled in mobile view
    const [sessionId] = useStorage(window.sessionStorage, "sessionID", uuid4());

    // *********** Sidebar states **********************
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar(); // Whether sidebar should be visible at all or hidden
    const [sidebarVisible, setSidebarVisible] = useStorage<boolean>(
        window.sessionStorage,
        "sidebarVisible",
        false
    );
    // Whether sidebar should be smaller state
    // const [sidebarCollapsed, setSidebarCollapsed] = useStorage<boolean>(
    //     window.sessionStorage,
    //     "sidebarCollapsed",
    //     false
    // );

    // // Whether sidebar should be toggled in mobile view
    // const [sidebarToggled, setSidebarToggled] = useStorage<boolean>(
    //     window.sessionStorage,
    //     "sidebarToggled",
    //     false
    // );

    // useLayoutEffect(() => {
    //     collapseSidebar(sidebarCollapsed);
    // }, [sidebarCollapsed, collapseSidebar]);

    // useLayoutEffect(() => {
    //     toggleSidebar(sidebarToggled);
    // }, [sidebarToggled, toggleSidebar]);

    // useEffect(() => {
    //   setSidebarCollapsed(collapsed);
    // }, [collapseSidebar, collapsed]);

    // useEffect(() => {
    //   setSidebarToggled(toggled);
    // }, [setSidebarToggled, toggled]);

    //Sidebar is visible at all times in mobile view
    // useEffect(() => {
    //     if (isMobileView) {
    //         setSidebarVisible(false);
    //         setSidebarCollapsed(false);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isMobileView]);

    //Sidebar is visible at at breakpoint value less then 2
    //Sidebar is visible always in appView
    useEffect(() => {
        if (isMobileView) {
            // setSidebarCollapsed(false);
            setSidebarVisible(true);
            collapseSidebar(false);
            toggleSidebar(false);
        } else {
            setSidebarVisible(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobileView]);

    const [isTouchDevice] = useState(
        window.matchMedia("(any-hover: none)").matches ? true : false
    );

    return (
        <UIContext.Provider
            value={{
                webSiteConfig: config,
                sidebarVisible,
                setSidebarVisible,
                searchBarActive,
                setSearchBarActive,
                isMobileView,
                collapseSidebar,
                toggleSidebar,
                // sidebarCollapsed,
                // setSidebarCollapsed,
                // sidebarToggled,
                // setSidebarToggled,
                searchTerm,
                setSearchTerm,
                sessionId,
                isTouchDevice,
            }}
        >
            {children}
        </UIContext.Provider>
    );
};

export default UIProvider;
export * from "./context";

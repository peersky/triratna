import { createContext } from "react";
import { UIProviderInterface } from "../../types";
export const UIContext = createContext<UIProviderInterface>({
    sidebarVisible: false,
    isTouchDevice: false,
    searchBarActive: false,
    isMobileView: false,
    // sidebarCollapsed: false,
    // sidebarToggled: false,
    searchTerm: "",
    collapseSidebar: () => {
        console.error("not intied");
    },
    toggleSidebar: () => console.error("not intied"),
    sessionId: "",
    setSearchBarActive: () => console.error("not intied"),
    // setSidebarCollapsed: () => console.error("not intied"),
    setSearchTerm: () => console.error("not intied"),
    // setSidebarToggled: () => console.error("not intied"),
    setSidebarVisible: () => console.error("not intied"),
    webSiteConfig: {
        SITEMAP: [],
        DEFAULT_LOGO: "",
        ENABLE_WEB3: false,
        COPYRIGHT_NAME: "",
    },
});

export default UIContext;

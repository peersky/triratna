export interface SiteMapItem {
    title: string;
    path: string;
    type: SiteMapItemType;
    children?: SiteMapItem[];
}

export type SiteMap = SiteMapItem[];
export interface WebSiteConfig {
    SITEMAP: SiteMap;
    DEFAULT_LOGO: string;
    ENABLE_WEB3: boolean;
    COPYRIGHT_NAME: string;
    DISCORD?: string;
    TWITTER?: string;
    GITHUB?: string;
}
export type SiteMapItemType =
    | "EMPTY"
    | "CONTENT"
    | "EXTERNAL"
    | "FOOTER_CATEGORY";

export interface UIProviderInterface {
    sidebarVisible: boolean | undefined;
    searchBarActive: boolean | undefined;
    isMobileView: boolean | undefined;
    collapseSidebar: (collapsed?: boolean) => void;
    toggleSidebar: (collapsed?: boolean) => void;
    // sidebarCollapsed: boolean | undefined;
    // sidebarToggled: boolean | undefined;
    searchTerm: string | undefined;
    setSearchBarActive: Function;
    // setSidebarCollapsed: Function;
    setSearchTerm: Function;
    // setSidebarToggled: Function;
    setSidebarVisible: Function;
    sessionId: string | undefined;
    webSiteConfig: WebSiteConfig;
    isTouchDevice: boolean;
}

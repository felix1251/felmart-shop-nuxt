import {
    adminlinksConstantTypes,
    linksDetailsContantTypes,
} from "../types/links.interface";

export const linksConstant: adminlinksConstantTypes = {
    HOME: "HOME",
    ADMIN_DASHBOARD: "ADMIN_DASHBOARD",
    ADMIN_PRODUCTS: "ADMIN_PRODUCTS",
    ADMIN_SALES: "ADMIN_SALES",
};

export const vendorSidebarLinksContant = {
    [linksConstant.ADMIN_DASHBOARD]: {
        link: "/vendor",
        source: [],
        icon: "material-symbols:home-outline",
        name: "Dashboard",
    },
    [linksConstant.ADMIN_PRODUCTS]: {
        link: "/vendor/products",
        source: [],
        icon: "ph:bag-bold",
        name: "Products",
    },
    [linksConstant.ADMIN_SALES]: {
        link: "/vendor/sales",
        source: [],
        icon: "ph:money-bold",
        name: "Sales",
    },
};

const linkDetailsContant = {
    [linksConstant.HOME]: {
        link: "/",
        source: [],
        icon: "",
        name: "Home",
    },
    ...vendorSidebarLinksContant,
};

export const useFindLinkDetails = (path: string): linksDetailsContantTypes => {
    return linkDetailsContant[path];
};

export const useFindLinkPath = (path: any): string => {
    return linkDetailsContant[path].link;
};

export const useFindLinkName = (path: string): string => {
    return linkDetailsContant[path].name;
};

export const useFindLinkSource = (path: string): Array<string> => {
    return linkDetailsContant[path].source;
};

export const useFindLinkIcon = (path: string): string => {
    return linkDetailsContant[path].icon;
};

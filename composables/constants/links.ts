import {
    IVendorlinksConstant,
    ILinksDetailsContant,
} from "@/interfaces/links.interface";

export const linksConstant: IVendorlinksConstant = {
    HOME: "HOME",
    VENDOR_DASHBOARD: "VENDOR_DASHBOARD",
    VENDOR_PRODUCTS: "ADMIN_PRODUCTS",
    VENDOR_SALES: "ADMIN_SALES",
};

export const vendorSidebarLinksContant = {
    [linksConstant.VENDOR_DASHBOARD]: {
        link: "/vendor",
        source: [],
        icon: "material-symbols:home-outline",
        name: "Dashboard",
    },
    [linksConstant.VENDOR_PRODUCTS]: {
        link: "/vendor/products",
        source: [],
        icon: "ph:bag-bold",
        name: "Products",
    },
    [linksConstant.VENDOR_SALES]: {
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

export const useFindLinkDetails = (path: string): ILinksDetailsContant => {
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

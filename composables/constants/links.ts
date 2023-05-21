import { adminlinksConstantTypes, adminDetailsLinksContantTypes } from "../types/links.interface";

export const adminLinksConstant: adminlinksConstantTypes = {
    ADMIN_DASHBOARD: "ADMIN_DASHBOARD",
    ADMIN_PRODUCTS: "ADMIN_PRODUCTS",
    ADMIN_CATEGORY: "ADMIN_CATEGORY",
    ADMIN_SALES: "ADMIN_SALES",
};

export const adminSidebarLinksContant = {
    [adminLinksConstant.ADMIN_DASHBOARD]: {
        link: "/admin",
        source: [],
        icon: "material-symbols:home-outline",
        name: "Dashboard"
    },
    [adminLinksConstant.ADMIN_PRODUCTS]: {
        link: "/admin/products",
        source: [adminLinksConstant.ADMIN_DASHBOARD],
        icon: "ph:bag-bold",
        name: "Products"
    },
    [adminLinksConstant.ADMIN_CATEGORY]: {
        link: "/admin/category",
        source: [adminLinksConstant.ADMIN_DASHBOARD],
        icon: "ic:baseline-list",
        name: "Categories"
    },
    [adminLinksConstant.ADMIN_SALES]: {
        link: "/admin/sales",
        source: [adminLinksConstant.ADMIN_DASHBOARD],
        icon: "ph:money-bold",
        name: "Sales"
    },
};

const adminDetailsLinksContant = {
    ...adminSidebarLinksContant
};

export const useFindLinkDetails = (path: string): adminDetailsLinksContantTypes | null => {
    return adminDetailsLinksContant[path];
};

export const useFindLinkPath = (path: any): string | null => {
    return adminDetailsLinksContant[path]?.link;
};

export const useFindLinkName = (path: string): string | null => {
    return adminDetailsLinksContant[path]?.name;
};

export const useFindLinkSource = (path: string): Array<string> | null => {
    return adminDetailsLinksContant[path]?.source;
};
import { adminlinksConstantTypes, adminDetailsLinksContantTypes } from "../types/links.interface";

export const adminLinksConstant:adminlinksConstantTypes = {
    ADMIN_DASHBOARD: "ADMIN_DASHBOARD",
    ADMIN_PRODUCTS: "ADMIN_PRODUCTS",
    ADMIN_CATEGORY: "ADMIN_CATEGORY",
    ADMIN_SALES: "ADMIN_SALES",
};

export const adminDetailsLinksContant = {
    [adminLinksConstant.ADMIN_DASHBOARD]: {
        link: "/admin",
        source: [],
        name: "Dashboard"
    },
    [adminLinksConstant.ADMIN_PRODUCTS]: {
        link: "/admin/products",
        source: [adminLinksConstant.ADMIN_DASHBOARD],
        name: "Products"
    },
    [adminLinksConstant.ADMIN_CATEGORY]: {
        link: "/admin/category",
        source: [adminLinksConstant.ADMIN_DASHBOARD],
        name: "Categories"
    },
    [adminLinksConstant.ADMIN_SALES]: {
        link: "/admin/sales",
        source: [adminLinksConstant.ADMIN_DASHBOARD],
        name: "Sales"
    },
};

export const useFindLinkDetails = (path:string): adminDetailsLinksContantTypes | null => {
    return adminDetailsLinksContant[path]
};

export const useFindLinkPath = (path:string): string | null => {
    return adminDetailsLinksContant[path]?.link
};

export const useFindLinkName = (path:string): string | null => {
    return adminDetailsLinksContant[path]?.name
};
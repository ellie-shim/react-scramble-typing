import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export const Typography = ({ children, variant = "body" }) => {
    const Tag = variant === "h1" ? "h1" : "p";
    return (_jsx(Tag, { style: { fontSize: variant === "h1" ? "2rem" : "1rem" }, children: children }));
};

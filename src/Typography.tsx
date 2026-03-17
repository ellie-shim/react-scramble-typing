import React from "react";

export const Typography: React.FC<{
  children: React.ReactNode;
  variant?: "h1" | "body";
}> = ({ children, variant = "body" }) => {
  const Tag = variant === "h1" ? "h1" : "p";
  return (
    <Tag style={{ fontSize: variant === "h1" ? "2rem" : "1rem" }}>
      {children}
    </Tag>
  );
};

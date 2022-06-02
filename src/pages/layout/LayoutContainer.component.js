import React from "react";
import { LayoutStyled } from "./Layout.styled"

export const LayoutContainer = ({ children }) => {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  );
};
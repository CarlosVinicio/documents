import React from "react";
import { Appbar } from "../../components/Appbar/Appbar.component";
import { LayoutStyled } from "./Layout.styled";

export const LayoutContainer = ({ children }) => {
  return (
    <LayoutStyled>
      <Appbar title={"Documents"} />
      {children}
    </LayoutStyled>
  );
};

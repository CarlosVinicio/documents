import React from "react";
import { AppbarStyled } from "./Appbar.styled";
import { useNavigate } from "react-router-dom";

export const Appbar = ({ title }) => {

  const navigate = useNavigate();
  
  const backToHome = () => navigate(`/`);

  return (
    <AppbarStyled>
      <div className="appbar">
        {" "}
        <div className="icon" onClick={backToHome}>
          <ion-icon name="home-outline"></ion-icon>
        </div>
        <div> {title}</div>
      </div>
    </AppbarStyled>
  );
};

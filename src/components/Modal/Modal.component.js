import React from "react";
import { ModalStyled } from "./Modal.styled";

export const Modal = ({ children, show }) => {
  if(!show){
    return null
  }
  return (
    <ModalStyled>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <h4 className="modal__title">Create new document</h4>
          </div>
          <div className="modal__body">
            {children}
          </div>
        </div>
      </div>
    </ModalStyled>
  );
};

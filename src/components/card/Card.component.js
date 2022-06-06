import React from "react";
import { getColorByDocumentType } from "../../utils/helpers/globa.helper";
import { Chip } from "../Chip/Chip.component";
import { CardStyled } from "./Card.style";

export const Card = ({ document, onDeleteCard, onSelectCard }) => {
  const { type, title, id } = document;

  return (
    <CardStyled>
      <div className="card__container">
        <div className="card__body">
          <div className="card__header">
            <Chip name={type} color={getColorByDocumentType(type)} />
          </div>
          <div className="card__content">
            <div className="card__content--title">Title:</div>
            <div className="card__content--data">{title}</div>
            <div className="card__content--title">Date:</div>
            <div className="card__content--data">10/10/2022</div>
          </div>
        </div>

        <div className="card__footer">
          <div onClick={() => onDeleteCard(id)}>
            <ion-icon name="trash-outline"></ion-icon>
          </div>
          <div onClick={() => onSelectCard(id)}>
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

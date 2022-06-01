import React, { useState } from "react";
import PropTypes from "prop-types";
import { SelectorStyled } from "./Selector.styled";

export const Selector = ({ options, title, onToogleOption }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState();

  const openListOptions = () => {
    setIsListOpen(!isListOpen);
  };

  const onSelectOption = (option) => {
    onToogleOption(option);
    setOptionSelected(option);
    setIsListOpen(false);
  };

  return (
    <SelectorStyled>
      <div className="selector__box">
        <button className="selector__button">
          <span>{optionSelected || "Seleccionar"}</span>
        </button>
        <div className="selector__icon" onClick={openListOptions}>
          {isListOpen ? (
            <ion-icon name="chevron-up-outline"></ion-icon>
          ) : (
            <ion-icon name="chevron-down-outline"></ion-icon>
          )}
        </div>
      </div>
      {isListOpen && (
        <div className="selector__list">
          {options.length > 0 &&
            options.map((option) => {
              return (
                <div key={option.id} className="selector__item" onClick={() => onSelectOption(option.type)}>
                  {option.type}
                </div>
              );
            })}
        </div>
      )}
    </SelectorStyled>
  );
};

Selector.prototype = {
  options: PropTypes.array,
};

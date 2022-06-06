import React from "react";
import PropTypes from "prop-types";
import { SelectorStyled } from "./Selector.styled";

export const Selector = ({
  options,
  onToogleOption,
  style,
}) => {
  const onSelectOption = (e) => {
    const { value } = e.target;
    onToogleOption(value);
  };

  return (
    <SelectorStyled style={style}>
      <select
        name="image"
        id="img"
        className="form__text"
        onChange={onSelectOption}
      >
        {options &&
          options.map((item) => {
            return (
              <option key={item.id} value={item.type}>
                {item.type}
              </option>
            );
          })}
      </select>
    </SelectorStyled>
  );
};

Selector.prototype = {
  options: PropTypes.array,
};

import styled from "styled-components";
import { colors } from "../../utils/constants/colors"

const baseButtonStyle = `
  border: 1px solid ${colors.border};
  cursor: pointer;
`;

export const SelectorStyled = styled.div`
  .selector__box {
    display: flex;
  }
  .selector__button {
    ${baseButtonStyle}
    border-radius: 3px 0px 0px 3px;
    width: 200px;
    height: 30px;
    background-color: white;
  }
  .selector__icon {
    ${baseButtonStyle}
    height: 28px;
    border-radius: 0px 3px 3px 0px;
    width: 22px ;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  //list
  .selector__list {
    width: 222px;
    border: solid 1px;
    border: 1px solid ${colors.border};
  }
  .selector__item{
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  .selector__item:hover{
    background-color: #39DC73;
    cursor: pointer ;
  }
`;

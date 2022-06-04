import styled from "styled-components";
import { palette } from "../../utils/constants/colors"

const baseButtonStyle = `
  border: 1px solid ${palette.border};
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
    height: 40px;
    background-color: white;
  }
  .selector__icon {
    ${baseButtonStyle}
    height: 38px;
    border-radius: 0px 3px 3px 0px;
    width: 22px ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-left: none;
  }

  //list
  .selector__list {
    position: absolute;
    //z-index:9999 ;
    width: 222px;
    border: solid 1px;
    border: 1px solid ${palette.border};
  }
  .selector__item{
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: white;
  }
  .selector__item:hover{
    background-color: #39DC73;
    cursor: pointer ;
  }
`;

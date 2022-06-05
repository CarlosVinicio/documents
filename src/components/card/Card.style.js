import styled from "styled-components";

import { palette } from "../../utils/constants/colors";

export const CardStyled = styled.div`
  .card__container {
    background-color: white;
    border: 1px solid ${palette.border};
    border-radius: 8px;
    margin-top: 20px;
    width: 222px;
    height: 170px;
    padding: 10px;

  }
  .card__container:hover {
    transform: scale(1, 1.1);
    box-shadow: 5px 5px 5px lightgrey;

  }
  .card__body {
    
  }
  .card__header{
    margin-bottom: 10px;
  }
  .card__content div {
    margin-bottom: 10px;
  }
  .card__footer{
    border-top: 1px solid ${palette.border};
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .card__footer div{
    padding-top:5px;
    cursor: pointer;
   }
`;
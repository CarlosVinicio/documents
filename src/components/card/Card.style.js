import styled from "styled-components";

import { palette } from "../../utils/constants/colors.constant";

export const CardStyled = styled.div`
  .card__container {
    background-color: white;
    border: 1px solid ${palette.border};
    border-radius: 8px;
    margin-top: 20px;
    height: 170px;
    padding: 10px;
  }
  .card__container:hover {
    box-shadow: 3px 11px 15px dimgrey;
  }
  .card__header {
    margin-bottom: 10px;
  }
  .card__content div {
    margin-bottom: 10px;
  }
  .card__content--title {
    color: ${palette.titles};
  }
  .card__footer {
    border-top: 1px solid ${palette.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card__footer div {
    padding-top: 5px;
    cursor: pointer;
  }
  .card__content--data {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

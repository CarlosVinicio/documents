import styled from "styled-components";
import { palette } from "../../utils/constants/colors.constant";

export const ButtonStyled = styled.div`
  button {
    width: 100px;
    height: 37px;
    background-color: white;
    cursor: pointer;
    border: solid 1px ${palette.border} ;
    border-radius: 10px ;
    color: green;
  }
  button:hover {
    background-color: aliceblue;
  }
`;

import styled from "styled-components";
import { palette } from "../../utils/constants/colors.constant"

export const SelectorStyled = styled.div`
  select {
    width: 200px;
    height: 35px;
    border: solid 1px ${palette.border};
    border-radius: 5px;
    cursor: pointer;
  }
`;

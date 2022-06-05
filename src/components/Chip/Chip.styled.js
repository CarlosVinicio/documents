import styled from "styled-components";
import { css } from "styled-components";

export const ChipStyled = styled.div`
  border: solid 1px grey;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  .chip__name {
    display: flex;
    justify-content: center;
    width: ${(props) => props.styled?.width ? props.styled?.width  : '100%'};
  }
`;

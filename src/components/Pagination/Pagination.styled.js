import styled from "styled-components";
import { palette } from "../../utils/constants/colors";

export const PaginationStyled = styled.div`
  ul {
    margin-top: 20px;
    display: flex;
  }
  li {
    border: 2px solid ${palette.border};
    margin: 10px;
    padding: 10px;
    list-style: none;
    cursor: pointer;
    background: white;
  }

  li:hover {
    
  }
  .active {
    background-color: yellow ;
  }

  .pagination{ 
    flex-direction: row;
    display: flex;
    justify-content:space-between ;
    align-items: center;
  }
`;

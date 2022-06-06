import styled from "styled-components";
import { palette } from "../../utils/constants/colors.constant";

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
    background-color: aliceblue ;
  }

  .pagination{ 
    flex-direction: row;
    display: flex;
    justify-content:space-between ;
    align-items: center;
    margin-top: 20px;
    @media (max-width: 660px) {
      flex-direction: column;
    }
  }
`;

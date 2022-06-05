
import styled from "styled-components";

export const HomeStyled = styled.div` 
  display: flex;
  flex-direction: column;
  padding: 5px 10px ;
  .home__header {
    display: flex;
    justify-content:space-between;
    margin-bottom: 20px;
  }
  .cards-grid {
    max-height: calc(100vh - 200px);
    overflow: auto;
    display: grid;
    gap: 0.75rem;
    margin-bottom: 5px;
    @media (min-width: 458px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 668px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
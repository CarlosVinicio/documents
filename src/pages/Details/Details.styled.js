import styled, { css } from "styled-components";

export const DetailsStyled = styled.div`
  background-color: white;
  min-height: calc(100vh - 50px);
  .details_header,
  .details__body {
    padding: 20px;
  }
  .details_header {
    display: flex;
    justify-content: space-between;
  }
  .details__body {
    ${(props) =>
      props.type === "Advanced"
        ? css`
            display: flex;
            justify-content: space-between;
            img {
              height: 100%;
              width: 100%;
            }
            @media (max-width: 800px) {
              display: block;
              img {
                height: 300px;
                width: 100%;
              }
            }
          `
        : css``};
    /*  @media (min-width: 700px) {

    } */
  }
  .details__title {
    font-size: 29px;
    font-weight: 600;
    color: #234b55;
  }
  .details_type {
    border: solid 1px lightgrey;
    background-color: antiquewhite;
    @media (min-width: 799px) {
      margin-right: 20px;
    }
    margin-bottom: 20px ;
    width: 100% ;
  }
  .details__data {
    width: 100% ;
  }
  .details__date {
    margin: 10px 0px;
  }
  .details__text {
    margin-bottom: 20px;
  }
  .details__label {
    font-size: 18;
    font-weight: 600;
  }
`;

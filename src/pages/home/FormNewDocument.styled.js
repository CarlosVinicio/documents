import styled from "styled-components";

export const FormStyled = styled.div`
  .form__input {
    margin-bottom: 20px;
  }
  .form__text {
    border: 1px solid #7B8B8D;
    height: 30px;
    box-sizing: border-box;
    padding:0px 10px ;
    width: 100%;
    margin-top: 5px;
  }
  label {
    font-weight: 500;
  }
  .form__footer{
    display: flex;
    justify-content: center;
    button {
      margin-right: 10px;
    }
  }
`
import styled from "styled-components";

export const ModalStyled = styled.div`
  .modal { 
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5) ;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .modal__content {
    width: 500px;
    background-color: #fff;
  }
  .modal__header {
    padding: 10px;
  }
  .modal__title {
    margin: 0;
  }
  .modal__body {
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee ;
  }
`;
import styled from "styled-components";

export const FormStyled = styled.div`
  width: 58%;
  .transactionform {
    display: none;
  }
  .formtop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .buttonsChoice {
    button {
      width: 100px;
      height: 2rem;
    }
    button:first-child {
      border: 1px solid #8f8f9d;
      border-radius: 3px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    button:nth-child(2) {
      border: 1px solid #8f8f9d;
      border-radius: 3px;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .amountDiv {
    width: 40%;
    display: flex;
    justify-content: flex-end;
  }
  .dateDiv {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .descriptionDiv {
    display: flex;
    align-items: center;
    padding: 0.5rem 0 0 1rem;
    textarea {
      width: 100%;
      height: 7rem;
      resize: none;
    }
  }
`;

export const AsideButton = styled.aside`
  width: 42%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 10ch;
    font-size: 1.5rem;
    border: 1px solid #8f8f9d;
    border-radius: 3px;
    transition: 0.02s all;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

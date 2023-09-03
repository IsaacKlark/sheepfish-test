import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';

export const Form = styled.form`
  width: 90%;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

export const TextFieldStyled = styled(TextField)`
  width: 100%;
  margin-top: 1rem;

  svg path  {
    color: yellow;
  }

  .MuiInputLabel-animated {
    color: yellow !important;
    background-color: #124481;
    padding: 0 0.2rem;
  }
 
  * {
    color: white;
    border: none;
  }

  input {
    color: white;
  }

  border-color: white;
  border: 2px solid yellow; 
  border-radius: 5px;
  outline: none;
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  color: #ff8686;
  text-align: start;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 0.5rem 2rem;
  border: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  background: linear-gradient(#320093,#1b0029);
  font-weight: 500;
  min-width: 10rem;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';

export const Header = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 3rem;
  color: #819fff;
  font-weight: 700;
`;

export const TextFieldStyled = styled(TextField)`
  width: 90%;
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
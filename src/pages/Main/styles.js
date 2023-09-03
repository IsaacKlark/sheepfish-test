import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';

export const Header = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 3rem;
  color: yellow;
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

export const BarWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  justify-content: flex-end;
`;

export const StyledPagination = styled(Pagination)`
  * {
    color: white !important;
    font-size: 1.1rem !important;
  }
  margin-top: 1rem;
`;
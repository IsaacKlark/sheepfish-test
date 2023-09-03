import styled from "@emotion/styled";

export const Table = styled.table`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid white;
  margin-top: 1rem;
  border-radius: 5px;
  border-collapse: collapse;
  margin-bottom: 1rem;
`
export const Th = styled.th`
  border: 2px solid #819fff;
  padding: 8px;
  text-align: left;
  color: white;
  font-size: 1rem;
  white-space: nowrap;
  text-align: center;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export const Td = styled.td`
  border: 2px solid #819fff;
  padding: 8px;
  text-align: left;

  &:hover {
    cursor: pointer;
  }

  a {
    color: white;
    font-size: 1rem;
    text-decoration: none;
  }

  text-align: center;

  svg {
    color: white;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;



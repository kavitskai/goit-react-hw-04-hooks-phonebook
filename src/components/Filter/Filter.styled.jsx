import styled from "@emotion/styled/macro";

export const Input = styled.input`
  border: 1px solid #000000;
  border-radius: 4px;
  font-size: 16px;
  height: 40px;
  margin-top: 10px;
  &:focus {
    outline: none;
    border: 1px solid #04125e;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 20px;
`;

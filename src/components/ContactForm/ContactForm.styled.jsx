import styled from "@emotion/styled";

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 40px;
  border: 1px solid #000000;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 10px;
  &:focus {
    outline: none;
    border: 1px solid #04125e;
  }
`;

export const Button = styled.button`
  min-width: 100px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  background-color: #9ccdf5;
  border: none;
`;

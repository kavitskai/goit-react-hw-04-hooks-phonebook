import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-size: 24px;
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

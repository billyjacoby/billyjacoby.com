import styled from "styled-components";

export const Button = styled.button`
  border-radius: 30px;
  padding: 15px 30px;
  text-align: center;
  background-color: #fcba04;
  color: black;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  transition: 0.2s background-color ease-in-out, 0.2s color ease-in-out,
    0.2s border-color ease-in-out, 0.2s opacity ease-in-out,
    0.2s box-shadow ease-in-out;

  :hover {
    background-color: #e55934;
    color: white;
    transition: 0.2s background-color ease-in-out, 0.2s color ease-in-out,
      0.2s border-color ease-in-out, 0.2s opacity ease-in-out,
      0.2s box-shadow ease-in-out;
  }
`;

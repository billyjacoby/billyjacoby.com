import styled from "styled-components";

export const HeadlineText = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.size || "3rem"};
  /* REFACTOR INTO VARIABLES */
  color: ${(props) => props.color};
  white-space: ${(props) => props.noWrap && "nowrap"};
  text-align: ${(props) => props.textAlign || ""};
`;

export const StyledP = styled.p`
  color: ${(props) => props.color};
`;

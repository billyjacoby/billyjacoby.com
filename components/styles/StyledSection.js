import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSectionPrimary = styled(StyledSection)`
  background-color: ${(props) =>
    props.backgroundColor || "var(--primaryColor)"};
  color: ${(props) => props.color || "var(--secondaryColor)"};
  padding: ${(props) => props.topPadding || 0} 0 100px 0;
`;

export const StyledSectionSecondary = styled(StyledSection)`
  background-color: ${(props) =>
    props.backgroundColor || "var(--secondaryColor)"};
  color: ${(props) => props.color || "var(--primaryColor)"};
  padding: ${(props) => props.topPadding || 0} 0 100px 0;
`;

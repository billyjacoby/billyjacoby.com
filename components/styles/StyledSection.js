import styled from "styled-components";
import pageHeaderBg from "../../images/pageHeaderBG.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSectionPrimary = styled(StyledSection)`
  background-color: ${(props) =>
    props.backgroundColor || "var(--primaryColor)"};
  color: ${(props) => props.color || "var(--secondaryColor)"};
  padding: ${(props) => props.padding || "100px 0"};
`;

export const StyledSectionSecondary = styled(StyledSection)`
  background-color: ${(props) =>
    props.backgroundColor || "var(--secondaryColor)"};
  color: ${(props) => props.color || "var(--primaryColor)"};
  padding: ${(props) => props.padding || "100px 0"};
`;

export const StyledSectionHeader = styled(StyledSection)`
  background-color: ${(props) =>
    props.backgroundColor || "var(--primaryColor)"};
  color: ${(props) => props.color || "var(--secondaryColor)"};
  background-image: url(${pageHeaderBg});
  background-image: url("https://new.billyjacoby.com/wp-content/uploads/2021/06/page-header_background.svg");

  min-height: 300px;

  background-repeat: repeat-x;
  /* background-position: left 150px; */
  background-size: 60%;
  transition: inherit;
  opacity: 1;
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 95%;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  max-width: ${(props) => props.maxWidth};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding || ""};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  max-width: ${(props) => props.maxWidth};
`;

import styled from "styled-components";
import { HeadlineText } from "./styles/Typography";
import { Button } from "./styles/Button";
import { StyledSectionPrimary } from "./styles/StyledSection";

import { SocialIcon } from "react-social-icons";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: ${(props) => props.flex || "1"};
  padding: 10px;
  /* border: solid 10px red; */
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--tertiaryColor);
  color: var(--secondaryColor);
  height: 3rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

const IconRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Footer = () => (
  <>
    <StyledSectionPrimary>
      <FooterDiv>
        <Row>
          <Column flex="2">
            <HeadlineText>Questions?</HeadlineText>
            <HeadlineText size="1.3rem">
              Get in touch, I'd be happy to answer them!
            </HeadlineText>
          </Column>
          <Column>
            <Button>Get in touch</Button>
          </Column>
        </Row>
        <Row>
          <Column flex="3 1 100px">
            Thanks for visiting my website. I hope you found something that can
            be at least a little helpful to you in your journey!
          </Column>
          <Column>
            <Row>
              <div>
                <HeadlineText size="1rem">Contact</HeadlineText>
                <p>me@billyjacoby.com</p>
                <p>
                  <a href="https://discordapp.com/users/7369/">
                    discord - billyjacoby
                  </a>
                </p>
              </div>
            </Row>
            <IconRow>
              <SocialIcon
                url="https://twitter.com/billyjacoby"
                bgColor="var(--secondaryColor)"
              />
              <SocialIcon
                url="https://github.com/billyjacoby"
                bgColor="var(--secondaryColor)"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/williamjacoby/"
                bgColor="var(--secondaryColor)"
              />
            </IconRow>
          </Column>
        </Row>
      </FooterDiv>
    </StyledSectionPrimary>
    <StyledFooter>
      <div>billyjacoby.com ?? - 2021</div>
      <div>Privacy Policy - Other Things</div>
    </StyledFooter>
  </>
);

export default Footer;

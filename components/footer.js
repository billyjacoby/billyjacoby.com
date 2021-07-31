import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Row, Column, Container } from "../components/styles/Layout";
import { StyledSectionPrimary } from "./styles/StyledSection";
import { HeadlineText } from "./styles/Typography";
import { Button } from "./styles/Button";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--tertiaryColor);
  color: var(--secondaryColor);
  height: 3rem;
`;

const IconRow = styled(Row)`
  justify-content: space-between;
`;

const Footer = () => (
  <>
    <StyledSectionPrimary>
      <Row justifyContent="space-evenly" maxWidth="75%">
        <Column alignItems="flex-start">
          <HeadlineText>Questions?</HeadlineText>
          <HeadlineText size="1.3rem">
            Get in touch, I'd be happy to answer them!
          </HeadlineText>
        </Column>
        <Column>
          <Button type="button">Contact me</Button>
        </Column>
      </Row>

      <Container>
        <Column alignItems="flex-start" maxWidth="50%">
          <h4>billyjacoby.com</h4>
          <p>
            Thanks for visiting my website. I hope you found something that can
            be at least a little helpful to you in your journey!
          </p>
        </Column>
        <Column justifyContent="stretch">
          <div>
            <HeadlineText size="1rem">Contact</HeadlineText>
            <p>me@billyjacoby.com</p>
            <p>
              <a href="https://discordapp.com/users/7369/">
                discord - billyjacoby
              </a>
            </p>
          </div>
          <IconRow>
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              style={{ padding: "0 10px" }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              style={{ padding: "0 10px" }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="3x"
              style={{ padding: "0 10px" }}
            />
          </IconRow>
        </Column>
      </Container>
    </StyledSectionPrimary>
    <FooterStyled>
      <div>billyjacoby.com © - 2021</div>
      <div>Privacy Policy - Other Things</div>
    </FooterStyled>
  </>
);

export default Footer;

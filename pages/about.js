import Layout from "../components/layout";
import Image from "next/image";
import aboutSVG from "../images/about.svg";

import { HeadlineText } from "../components/styles/Typography";
import { Row, Column, Container } from "../components/styles/Layout";
import {
  StyledSectionSecondary,
  StyledSectionHeader,
} from "../components/styles/StyledSection";
import Footer from "../components/footer";

import BlogCards from "../components/BlogCards";

const AboutPage = () => (
  <Layout>
    <StyledSectionHeader>
      <Container>
        <Row>
          <HeadlineText size="4rem" noWrap>
            About Me
          </HeadlineText>
        </Row>
      </Container>
    </StyledSectionHeader>

    <StyledSectionSecondary padding="200px">
      <Container>
        <Row>
          <Column>
            <div>
              <h2>
                <span>about billyjacoby</span>
              </h2>

              <h2>full stack web developer, &amp; learner of new things </h2>

              <p>
                From web development, to microcontrollers and everything in
                between I love to learn how things work and solve different
                kinds of problems.{" "}
              </p>
            </div>
          </Column>
          <Column>
            <Image src={aboutSVG} />
          </Column>
        </Row>
      </Container>
    </StyledSectionSecondary>

    <Footer></Footer>
  </Layout>
);

export default AboutPage;

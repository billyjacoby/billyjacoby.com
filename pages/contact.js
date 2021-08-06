import Layout from "../components/layout";
import Image from "next/image";

import { HeadlineText } from "../components/styles/Typography";
import { Row, Column, Container } from "../components/styles/Layout";
import {
  StyledSectionSecondary,
  StyledSectionHeader,
} from "../components/styles/StyledSection";
import Footer from "../components/Footer";

const ContactPage = () => (
  <Layout>
    <StyledSectionHeader>
      <Container>
        <Row>
          <HeadlineText size="4rem" noWrap>
            Contact Me
          </HeadlineText>
        </Row>
      </Container>
    </StyledSectionHeader>

    <StyledSectionSecondary padding="200px">
      <Container>
        <Row>text</Row>
      </Container>
    </StyledSectionSecondary>

    <Footer></Footer>
  </Layout>
);

export default ContactPage;

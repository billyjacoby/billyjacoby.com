import styled from "styled-components";
import Layout from "../components/layout";
import Image from "next/image";

//* Images
import sittingAtDesk from "../images/sittingAtDesk.svg";
import collaboratingImg from "../images/collaborating.svg";

//* Styled Components
import {
  StyledSectionPrimary,
  StyledSectionSecondary,
} from "../components/styles/StyledSection";

import { Container, Row, Column } from "../components/styles/Layout";

import { Button } from "../components/styles/Button";
import { StyledP, HeadlineText } from "../components/styles/Typography";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";

const ColoredSpan = styled.span`
  color: ${(props) => props.color};
`;

const ListItem = styled.li`
  margin: 20px 0;
`;

export default function Home({ posts }) {
  return (
    <Layout title=" - home">
      {/* Header */}
      <StyledSectionPrimary padding="0 0 100px 0">
        <Container>
          <Row>
            <Column>
              <HeadlineText>
                a{" "}
                <ColoredSpan color="var(--emphasisColor)">
                  collection
                </ColoredSpan>{" "}
                of blog posts, tech demos, and tutorials
              </HeadlineText>
              <StyledP>
                Hi, I’m Billy Jacoby – a freelance web developer, tech
                enthusiast, and an avid learner of things
              </StyledP>
              <Button type="button">Learn more about me</Button>
            </Column>
            <Column>
              <Image src={sittingAtDesk} />
            </Column>
          </Row>
        </Container>
      </StyledSectionPrimary>
      <StyledSectionSecondary>
        <Container>
          <Container>
            <Row justifyContent="space-around">
              <Column>
                <Image src={collaboratingImg} />
              </Column>
              <Column>
                <HeadlineText size="2rem">
                  Currently available for contract work
                </HeadlineText>
                <StyledP>
                  Open for contract work on React based Javascript web
                  applications
                </StyledP>
                <ul>
                  <ListItem>GatsbyJS contributor</ListItem>
                  <ListItem>
                    Proficient in NextJS with a variety of database back-ends
                  </ListItem>
                  <ListItem>
                    Experienced with Redux and other frequently used React
                    libraries
                  </ListItem>
                </ul>
                <Button type="button">Contact Me</Button>
              </Column>
            </Row>
          </Container>
        </Container>
      </StyledSectionSecondary>

      <StyledSectionPrimary
        backgroundColor="var(--emphasisColor)"
        flexDirection="column"
        color="var(--secondaryColor)"
      >
        <HeadlineText>Blog</HeadlineText>
        <p>Latest posts from my blog</p>
        <BlogCards posts={posts} numPosts={3} />
      </StyledSectionPrimary>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  let response = await fetch(
    process.env.BASE_URL + "posts?_embed&status=publish"
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}

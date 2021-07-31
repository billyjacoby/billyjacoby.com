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

import {
  BlogImage,
  BlogPost,
  BlogPostContainer,
  BlogPostHeadline,
} from "../components/styles/BlogCard";

import { Button } from "../components/styles/Button";
import { StyledP, HeadlineText } from "../components/styles/Typography";

const StyledDiv = styled.div`
  padding: 0 50px;
`;

const ColoredSpan = styled.span`
  color: ${(props) => props.color};
`;

const ListItem = styled.li`
  margin: 20px 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--tertiaryColor);
  color: var(--secondaryColor);
  height: 3rem;
`;

export default function Home({ posts }) {
  return (
    <Layout title=" - home">
      {/* Header */}
      <StyledSectionPrimary>
        <Container>
          <div>
            <HeadlineText>
              a{" "}
              <ColoredSpan color="var(--emphasisColor)">collection</ColoredSpan>{" "}
              of blog posts, tech demos, and tutorials
            </HeadlineText>
            <StyledP>
              Hi, I’m Billy Jacoby – a freelance web developer, tech enthusiast,
              and an avid learner of things
            </StyledP>
            <Button type="button">Learn more about me</Button>
          </div>
          <div>
            <Image src={sittingAtDesk} />
          </div>
        </Container>
      </StyledSectionPrimary>
      <StyledSectionSecondary topPadding="100px">
        <Container>
          <div>
            <Image src={collaboratingImg} />
          </div>
          <StyledDiv>
            <HeadlineText size="2rem">
              currently available for contract work
            </HeadlineText>
            <StyledP>
              Open for contract work on React based Javascript web applications
            </StyledP>
            <ul>
              <ListItem>GatsbyJS contributor</ListItem>
              <ListItem>
                Proficient in NextJS with a variety of database back-ends
              </ListItem>
              <ListItem>
                Experienced with Redux and other frequently used React libraries
              </ListItem>
            </ul>
            <Button type="button">Contact Me</Button>
          </StyledDiv>
        </Container>
      </StyledSectionSecondary>
      <StyledSectionPrimary
        backgroundColor="#30bced"
        flexDirection="column"
        color="#fff"
      >
        <HeadlineText>Blog</HeadlineText>
        <p>Latest posts from my blog</p>
        <BlogPostContainer>
          {posts.slice(0, 3).map((post) => {
            return (
              <BlogPost key={post.id}>
                <BlogPostHeadline>{post.title.rendered}</BlogPostHeadline>
                <BlogImage
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post._embedded["wp:featuredmedia"][0].title.rendered}
                  width="350"
                  height="250"
                />
                {/* Fix excerpt */}
                <span
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </BlogPost>
            );
          })}
        </BlogPostContainer>
      </StyledSectionPrimary>
      <StyledSectionPrimary>
        <Row justifyContent="space-evenly">
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
          <div>
            <h4>billyjacoby.com</h4>
            <p>
              Thanks for visiting my website. I hope you found something that
              can be at least a little helpful to you in your journey!
            </p>
          </div>
          <div>
            <h5>Contact</h5>
            <p>me@billyjacoby.com</p>
            <p>
              <a href="https://discordapp.com/users/7369/">
                discord - billyjacoby
              </a>
            </p>
          </div>
        </Container>
      </StyledSectionPrimary>
      <Footer>
        <div>billyjacoby.com © - 2021</div>
        <div>Privacy Policy - Other Things</div>
      </Footer>
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

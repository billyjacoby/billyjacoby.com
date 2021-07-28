import Image from "next/image";

import styled from "styled-components";
import Layout from "../components/layout";

import sittingAtDesk from "../images/sittingAtDesk.svg";
import collaboratingImg from "../images/collaborating.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* REFACTOR INTO VARIABLES */
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.topPadding || 0} 0 100px 0;
`;

const Container = styled.div`
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

const StyledDiv = styled.div`
  padding: 0 50px;
`;

const HeadlineText = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.size || "3rem"};
  /* REFACTOR INTO VARIABLES */
  color: ${(props) => props.color};
`;

const StyledP = styled.p`
  color: ${(props) => props.color};
`;

const ColoredSpan = styled.span`
  color: ${(props) => props.color};
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 15px 30px;
  text-align: center;
  background-color: #fcba04;
  color: black;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  transition: 0.2s background-color ease-in-out, 0.2s color ease-in-out,
    0.2s border-color ease-in-out, 0.2s opacity ease-in-out,
    0.2s box-shadow ease-in-out;

  :hover {
    background-color: #e55934;
    color: white;
    transition: 0.2s background-color ease-in-out, 0.2s color ease-in-out,
      0.2s border-color ease-in-out, 0.2s opacity ease-in-out,
      0.2s box-shadow ease-in-out;
  }
`;

const ListItem = styled.li`
  margin: 20px 0;
`;

//* Blog Posts

const BlogHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogPostContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1200px;
  align-self: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const BlogPost = styled.div`
  max-width: 400px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const BlogPostHeadline = styled.h5`
  text-align: center;
  font-size: 1.2rem;
`;

const BlogImage = styled(Image)`
  border-radius: 10px;
`;

export default function Home({ posts }) {
  return (
    <Layout title=" - home">
      {/* Header */}
      <StyledSection backgroundColor="#1f2641">
        <Container>
          <div>
            <HeadlineText color="white">
              a <ColoredSpan color="#30bced">collection</ColoredSpan> of blog
              posts, tech demos, and tutorials
            </HeadlineText>
            <StyledP color="white">
              Hi, I’m Billy Jacoby – a freelance web developer, tech enthusiast,
              and an avid learner of things
            </StyledP>
            <Button type="button">Learn more about me</Button>
          </div>
          <div>
            <Image src={sittingAtDesk} />
          </div>
        </Container>
      </StyledSection>
      <StyledSection topPadding="100px">
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
      </StyledSection>
      <StyledSection backgroundColor="#30bced" flexDirection="column">
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
      </StyledSection>
      <StyledSection backgroundColor="#1f2641">
        <Container>
          <div>
            <HeadlineText>Questions?</HeadlineText>
            <HeadlineText size="1.3rem">
              Get in touch, I'd be happy to answer them!
            </HeadlineText>
          </div>

          <Button type="button">Contact me</Button>
        </Container>
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
      </StyledSection>
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

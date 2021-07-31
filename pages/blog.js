import Layout from "../components/layout";

import { HeadlineText } from "../components/styles/Typography";
import { Row, Container } from "../components/styles/Layout";
import {
  StyledSectionSecondary,
  StyledSectionHeader,
} from "../components/styles/StyledSection";
import Footer from "../components/footer";

import BlogCards from "../components/BlogCards";

const BlogPage = ({ posts }) => {
  return (
    <Layout>
      <StyledSectionHeader>
        <Container>
          <Row>
            <HeadlineText size="4rem">Blog</HeadlineText>
          </Row>
        </Container>
      </StyledSectionHeader>

      <StyledSectionSecondary>
        <BlogCards posts={posts} />
      </StyledSectionSecondary>

      <Footer />
    </Layout>
  );
};

export default BlogPage;

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

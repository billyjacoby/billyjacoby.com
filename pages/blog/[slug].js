import Layout from "../../components/layout";
import Image from "next/image";

import { HeadlineText } from "../../components/styles/Typography";
import { Row, Column, Container } from "../../components/styles/Layout";
import {
  StyledSectionSecondary,
  StyledSectionHeader,
} from "../../components/styles/StyledSection";
import Footer from "../../components/footer";

const ContactPage = ({ post }) => (
  <Layout>
    <StyledSectionHeader bgImage={post._links["wp:featuredmedia"][0].href}>
      <Container>
        <Row>
          <HeadlineText size="4rem" textAlign="center">
            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </HeadlineText>
        </Row>
      </Container>
    </StyledSectionHeader>

    <StyledSectionSecondary padding="50px">
      <Container>
        <Row>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Row>
      </Container>
    </StyledSectionSecondary>

    <Footer></Footer>
  </Layout>
);

export default ContactPage;

export async function getStaticPaths() {
  let response = await fetch(
    process.env.BASE_URL + "posts?_embed&status=publish"
  );
  const data = await response.json();
  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    process.env.BASE_URL + `posts?_embed&slug=${params.slug}`
  );
  const posts = await response.json();
  const post = posts[0];

  return { props: { post } };
}

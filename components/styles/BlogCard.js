import styled from "styled-components";
import Image from "next/image";

//* Blog Posts
export const BlogPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  max-width: 1200px;
  align-self: center;
  padding: 0 30px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogPost = styled.div`
  max-width: 600px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const BlogPostHeadline = styled.h5`
  text-align: center;
  font-size: 1.2rem;
`;

export const BlogImage = styled(Image)`
  border-radius: 10px;
`;

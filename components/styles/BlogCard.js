import styled from "styled-components";
import Image from "next/image";

//* Blog Posts
export const BlogPostContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1200px;
  align-self: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const BlogPost = styled.div`
  max-width: 400px;
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

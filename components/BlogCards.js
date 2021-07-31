import {
  BlogImage,
  BlogPost,
  BlogPostContainer,
  BlogPostHeadline,
} from "./styles/BlogCard";

const BlogCards = ({ posts, numPosts }) => (
  <BlogPostContainer>
    {posts.slice(0, numPosts).map((post) => {
      return (
        <BlogPost key={post.id}>
          <BlogPostHeadline>
            <span
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></span>
          </BlogPostHeadline>
          <BlogImage
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post._embedded["wp:featuredmedia"][0].title.rendered}
            width="350"
            height="250"
          />
          {/* Fix excerpt */}
          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </BlogPost>
      );
    })}
  </BlogPostContainer>
);

export default BlogCards;

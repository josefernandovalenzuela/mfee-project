import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

import Banner from "../../Banner";
import Comments from "../../Comments";

const post = {
  image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  title: "Camaleon",
  postID: "121sq22",
  comments: [
    {
      _id: "4if91",
      author: "José Valenzuela",
      content: "Comentario",
      createdAt: "2024-04-10 12:00:00",
      updatedAt: "2024-04-10 12:00:00",
      __v: "_v",
    },
  ],
  description: "Imagen de un camaleon",
} 

function PostPage() {
  return (
    <Container container>
      Post page
      <BannerContainer item>
        <Banner postImage={post.image} postTitle={post.title}/>
      </BannerContainer>
      <DescriptionContainer item>
        <p>{post.description}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        <Comments comments={post.comments}/>
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;

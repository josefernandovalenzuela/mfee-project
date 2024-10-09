import { Title, Container, FormContainer } from "./Comments.styles";
import CommentCard from "../CommentCard";
import { CommentProp } from "../CommentCard/CommentCard";

/*const comments = [
  {
    _id: "412fsfa",
  author: "José Valenzuela",
  content: "Comentario",
  createdAt: "2024-04-10 12:00:00",
  updatedAt: "2024-04-10 12:00:00",
  __v: "-v",
  }
]*/

interface CommentsProps { 
  comments: CommentProp[];
}

function Comments({comments}: CommentsProps) {
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      {comments.map(() => {
        return  <CommentCard {...comments[0]}/>
      })}
      <FormContainer item sm={8}>
        Form
      </FormContainer>
    </Container>
  );
}

export default Comments;

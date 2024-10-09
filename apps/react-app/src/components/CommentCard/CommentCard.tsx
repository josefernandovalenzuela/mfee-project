import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

const comment = {
  _id: "412fsfa",
  author: "José Valenzuela",
  content: "Comentario",
  createdAt: "2024-04-10 12:00:00",
  updatedAt: "2024-04-10 12:00:00",
  __v: "-v",
}; // ACT 1 - Fill all the properties with random data

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{comment.author}</Author>
        <Typography>{comment.content}</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;

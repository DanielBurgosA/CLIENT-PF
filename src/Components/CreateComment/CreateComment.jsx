import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../Redux/Slicers/CommentSlicer";
import {
  FormControl,
  FormLabel,
  Button,
  Container,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function AddComment() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [newComment, setNewComment] = useState({
    comment: "",
    projectId: id,
  });

  const LogInStatus = useSelector((state) => state.login.status);

  const Submit = (e) => {
    dispatch(postComment(newComment));
    setNewComment({
      comment: "",
    });
    Swal.fire("Good job!", "You added a comment!", "success");
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    setNewComment({ ...newComment, comment: e.target.value });
  };

  return (
    <div>
      <Container mt="100px" mb="100px">
        <form onSubmit={handleSubmit(Submit)}>
          <VStack>
            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Textarea
                value={newComment.comment}
                onChange={handleChange}
                resize="vertical"
                h="100px"
                placeholder="Add a comment..."
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              {" "}
              Post{" "}
            </Button>
          </VStack>
        </form>
      </Container>
    </div>
  );
}

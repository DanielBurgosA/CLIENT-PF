import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../Redux/Slicers/commentsSlicer";
import {
  FormControl,
  FormLabel,
  Button,
  Container,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import Swal from 'sweetalert2';
import { useState } from "react";

export default function AddComment() {

  const [newComment, setNewComment] = useState()
  
  const dispatch = useDispatch();

  const commentprueba = useSelector(state => state.comment)
  console.log("...>", commentprueba)

  const LogInStatus = useSelector((state) => state.login.status);
  console.log("usuario", LogInStatus);

  const handleSubmit = (info) => {
    dispatch(postComment(info))
    console.log('info :>> ', info);
    Swal.fire(
      'Good job!',
      'You added a comment!',
      'success'
    )
  }

  const handleChange = (e) => {
    console.log('e.target, e.target.value :>> ', e.target.name);
  }

  return (
    <div>
      <Container mt="100px" mb="100px">
        <form onSubmit={handleSubmit}>
          <VStack>
            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Textarea
                name="comment"
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

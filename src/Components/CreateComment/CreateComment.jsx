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

export default function AddComment() {
  const dispatch = useDispatch();

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

  return (
    <div>
      <Container mt="100px" mb="100px">
        <form onSubmit={handleSubmit}>
          <VStack>
            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Textarea
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

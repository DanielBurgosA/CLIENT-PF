import { useParams, Link } from "react-router-dom";
import {
  getProjectById,
  provGetId,
  cleanId,
} from "../../Redux/Slicers/projectSlicer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Text,
  Button,
  Image,
  Center,
  VStack,
  Heading,
  Card,
} from "@chakra-ui/react";
import style from "./DetailProject.module.css";
import AddComment from "../../Components/CreateComment/CreateComment";

export default function DetailProject() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let projectById = useSelector((state) => state.project.projectId);
  console.log('projectById :>> ', projectById);

  useEffect(() => {
    dispatch(provGetId(id));
    return () => {
      dispatch(cleanId());
    };
  }, [dispatch, id]);

  return (
    <div>
      <Box maxH="1.5">
          <Box textAlign="justify">
            <VStack spacing={3}>
              <Heading as="b" fontSize="4rem" margin="1rem 3rem">
              </Heading>
              <Card
                variant="outline"
                borderColor="#D8DEE4"
                maxW="70rem"
                className={style.Prov}
              >
                <Text fontSize="20px" padding="7px 10px 0px">
                  Creador: ramdom user{" "}
                </Text>
                <Text fontSize="15px" padding="5px">
                 
                </Text>
              </Card>
              <Center>
                <Image
                  boxSize="400px"
                  objectFit="cover"
                  borderRadius="full"
                  align="center"
             
                />
              </Center>
              <Card
                bg="#F6F8FA"
                variant="outline"
                borderColor="#D8DEE4"
                maxW="70rem"
              >
                <Text fontSize="20px" padding="15px">
                  
                </Text>
              </Card>
            </VStack>
          </Box>
        <Box>
          <Link to="/projects">
            <Button margin="1rem 3rem" _hover={{ background: "#C9EEFF" }}>
              Back
            </Button>
          </Link>
        </Box>
         <div>
        <AddComment />
      </div>
      </Box>
     
    </div>
  );
}

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
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import style from "./DetailProject.module.css";
import AddComment from "../../Components/CreateComment/CreateComment.jsx";
import CommentsProjectById from "../../Components/CommentsByIds/CommentsProjectById";

export default function DetailProject() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const LogInStatus = useSelector((state) => state.login.status);

  useEffect(() => {
    dispatch(getProjectById(id));
    return () => {
      dispatch(cleanId());
    };
  }, [dispatch, id]);

  let projectById = useSelector((state) => state.project.projectId);
  console.log('projectById :>> ', projectById);

  return (
    <Box>
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              projectById.image
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {projectById.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
            ${projectById.currentAmount} / ${projectById.cost}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Descripción
              </Text>
              <Text fontSize={'lg'}>
                {projectById.description}
              </Text>
            </VStack>
          </Stack>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
      {LogInStatus ? <AddComment /> : ""}
      <div>
        <CommentsProjectById />
      </div>
    </Box>
  );
}

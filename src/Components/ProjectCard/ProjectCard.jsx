import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Center,
  Input,
  useColorModeValue,

} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addseeLaterItem } from "../../Redux/Slicers/projectSlicer";

export default function ProjectCard(props) {
  const dispatch = useDispatch();
  const { name, abstrac, image, location, id, user, title, completed, currentAmount, cost } = props.project;
  const navigate = useNavigate();
  const LogInStatus = useSelector((state) => state.login.status);

  const clickHandlerDonate = (e) => {
    if (LogInStatus) {
      navigate(`/pagos?id=${id}`);
    } else {
      navigate("/login");
    }
  };

  const clickHandlerSeeLater = (e) => {
    dispatch(addseeLaterItem(e.target.value));
  };

  return (
    <div>
      <Card
        maxW="md"
        maxWidth="300px"
        maxHeight="470px"
        minWidth="300px"
        minHeight="470px"
      >
        <CardHeader maxHeight="80px">
          <Flex spacing="4" alignItems="center">
            <Link to={`/user/${user}`}>
              <Avatar name={user} src="https://bit.ly/sage-adebayo" />
            </Link>
            <Box>
              <Text fontWeight="bold" fontSize="sm">{name}</Text>
              <Text fontSize="sm">{location}</Text>
            </Box>
          </Flex>
        </CardHeader>
        
        <Box  m="0.5rem">
         <Text color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight="bolt"
              fontSize={'1xl'} > Raised money: ${currentAmount} 
        </Text>
        

        <Text color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight="bolt"
              fontSize={'1xl'} > Total to collect: ${cost}
        </Text>
        </Box>

        <Link to={`/projects/${id}`} key={id}>
          <CardBody maxHeight="80px">
            <Text>{abstrac}</Text>
          </CardBody>
          <Center>
          <Image
            objectFit="cover"
            src={image}
            alt={name}
            margin="1px"
            maxHeight="200px"
            minHeight="200px"
            maxWidth="300px"
            minWidth="300px"
            />
          </Center>
          
        </Link>
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          maxHeight="50px"
          sx={{
            "& > button": {
              minW: "50px",
            },
          }}
          margin="5px"
        >
          {completed?<p>COMPLETED</p> :!localStorage.getItem("rol")&&<Button flex="1"
            variant="ghost"
            type="submit"
            backgroundColor="blue.500"
            color="white"
            value={id}
            onClick={clickHandlerDonate}
            _hover={{ backgroundColor: "green.500" }} >
            Donar
          </Button>}

          <Button
            flex="1"
            variant="ghost"
            type="submit"
            backgroundColor="blue.500"
            color="white"
            value={id}
            onClick={clickHandlerSeeLater}
            _hover={{ backgroundColor: "green.500" }}
          >
            See later
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}



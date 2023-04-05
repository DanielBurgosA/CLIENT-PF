
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../../../Utils/image/276-2761324_default-avatar-png.png";


export default function UserProfile() {

  const user = useSelector(state => state.login.user)
  
  return (

    <Stack
      borderWidth="1px"
      borderRadius="lg"
      w={ '540px' }
      height={ '20rem' }
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}>
      <Flex flex={1} bg="blue.200">
        <Image
          objectFit="cover"
          boxSize="100%"
          src={
            user.user_image ? user.user_image : defaultImage
          }
        />
      </Flex>
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={2}
        pt={3}
        gap={2.5}>

        <Heading fontSize={'2xl'} fontFamily={'body'}>
        {user?.name?.split(" ").length > 1 
          ? user?.name?.split(" ").reduce( (acc, e) =>{
            return acc + e.charAt(0).toUpperCase() + e.slice(1) + " "
          },"" ).trim(): user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1) }

        </Heading>
        <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {user?.lastname?.split(" ").length > 1 
          ? user?.lastname?.split(" ").reduce( (acc, e) =>{
            return acc + e.charAt(0).toUpperCase() + e.slice(1) + " "
          },"" ).trim(): user?.lastname?.charAt(0).toUpperCase() + user?.lastname?.slice(1) }
          
        </Text>
        <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {user?.email}
        </Text>
        
      </Stack>

    </Stack>

  )
}



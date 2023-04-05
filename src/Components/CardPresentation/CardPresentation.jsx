import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    SimpleGrid,
  } from "@chakra-ui/react";
  
  export default function SocialProfileWithImage() {
    return (
      <Center py={6}>
        <SimpleGrid columns={3} spacing={12}>
          <Box
            maxW={"270px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://d2yoo3qu6vrk5d.cloudfront.net/images/20190810110252/agua_gettyimages-642019750-900x485.jpg"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  "https://i1.rgstatic.net/ii/profile.image/898244754305026-1591169646430_Q512/Abdulgafar-Sulaiman.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>
  
            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Henry Summons
                </Heading>
                <Text color={"gray.500"}>Campaign for Clean Water</Text>
              </Stack>
            </Box>
          </Box>
          <Box
            maxW={"270px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://th.bing.com/th/id/R.48128406c07b4b751814f2dce191ea97?rik=%2fiq1HVeGHeVABg&pid=ImgRaw&r=0"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  "https://dam.muyinteresante.com.mx/wp-content/uploads/2018/05/extranos-pueden-elegir-mejores-fotos-de-perfil.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>
  
            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Victoria Garza
                </Heading>
                <Text color={"gray.500"}>Campaign for Child Protection</Text>
              </Stack>
            </Box>
          </Box>
          <Box
            maxW={"270px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://th.bing.com/th/id/OIP.1Gc5iSPFuxdPFMILvWc1ewHaEI?pid=ImgDet&rs=1"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  "https://ta.azureedge.net/p/images/usuarios/l/LFnZSSSD2Eha2dlvCrcvSLdHBjwrgRza0.jpg/300x300cut/"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>
  
            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Lela Neal
                </Heading>
                <Text color={"gray.500"}>Campaign for Poverty un America</Text>
              </Stack>
            </Box>
          </Box>
        </SimpleGrid>
      </Center>
    );
  }
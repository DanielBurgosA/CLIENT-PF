import { Box, Heading } from "@chakra-ui/react";
import Swal from 'sweetalert2/src/sweetalert2.js';

export default function ExecutePayment() {
  const handleClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'Payment Successfully Done',
    }).then(function() {
        window.location = "http://localhost:3000/home";
    });
  };
  return (
    <Box
      bg="#6e94c2"
      p={6}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
    >
      <Heading as="h1" size="lg" color="white">
        Payment was successful
      </Heading>
      <Box>
      {handleClick()}
      </Box>
    </Box>
  );
}

import { Box, Heading } from "@chakra-ui/react";
import Swal from 'sweetalert2/src/sweetalert2.js';
export default function ExecutePayment() {

  const handleClick = () => {
    Swal.fire({
      icon: 'error',
      title: 'Cancelled',
      text: 'Payment Successfully Cancelled',
    }).then(function() {
        window.location = "http://localhost:3000/home";
    });
  };
  return (
    <Box
      bg="#ff6b6b"
      p={6}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
    >
      <Heading as="h1" size="lg" color="white">
      Payment Successfully Cancelled
      </Heading>
      <Box>
      {handleClick()}
      </Box>
    </Box>
  );
}

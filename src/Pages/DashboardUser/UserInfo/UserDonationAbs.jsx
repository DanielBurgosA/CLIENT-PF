import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';

export default function UserDonationAbs() {
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {"hola"}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {"5 lucas"}
            </StatNumber>
        </Stat>
    )
}

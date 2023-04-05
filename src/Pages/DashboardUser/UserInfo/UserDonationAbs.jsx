import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import { getProject } from '../../../Redux/Slicers/AdminDashboard';
import { useEffect } from 'react';

export default function UserDonationAbs() {
    
    const dispatch = useDispatch();

    const userProjects = useSelector(state => state.dashBoardUser.projectUser)
    
    
    useEffect(() => {
      dispatch(getProject());
    }, [dispatch]) 

    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {`Active Project` }
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {`You have ${userProjects.length} active projects` }
            </StatNumber>
        </Stat>
    )
}

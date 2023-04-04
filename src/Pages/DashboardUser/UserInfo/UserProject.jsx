import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProject } from "../../../Redux/Slicers/UserDashboard";
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Button, Text, Stack } from '@chakra-ui/react'

export default function UserProject() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProject());
    }, [dispatch])
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                w={{ sm: '100%', md: '540px' }}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>

                        <Text py='2'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso
                            and steamed milk.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

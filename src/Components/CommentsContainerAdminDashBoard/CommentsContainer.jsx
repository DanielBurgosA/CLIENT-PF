import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Heading,
} from '@chakra-ui/react'

export default function CommentsContainer({ data, click }) {

 

    return (
        <TableContainer>
            <Heading textAlign={"center"}>Hola</Heading>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Project</Th>
                        <Th>Comment</Th>
                        {data[0]?.deleted ? <Th>Approve</Th> : <Th>Disapprove</Th>}
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map(comment => {
                        return (
                            <Tr>
                                <Td>{comment.user.user_name}</Td>
                                <Td>{comment.project.name}</Td>
                                <Td>{comment.comment}</Td>
                                <Td>{comment.deleted?<Button onClick={()=>click(comment.id)}>Un ban</Button>: <Button onClick={()=>click(comment.id)}>Ban</Button>}</Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

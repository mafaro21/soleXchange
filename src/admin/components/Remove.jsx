import {
    Box, Flex, Heading, Text, Button, FormControl,
    FormLabel,
    Input,
    Center,
    VStack,
    useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'


export default function Remove() {
    const toast = useToast()
    const [search, setSearch] = useState('')
    const [dbData, setdbData] = useState('')

    const handleSearch = () => {

        axios.get(`http://localhost:8888/sole/search/?q=${search}`)
            .then((res) => {
                setdbData(res.data)
                // dispatch(setPage({ data: 'res.data' }))
                // console.log(res.data)
            })
            .catch((err) => {
                seterrData('item does not exist')
                toast({
                    title: "Search Error",
                    description: "You've added a new shoe",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })

        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <Box mt={3} p={7} borderRadius={'12px'} style={{ border: '2px solid #9B3922' }}>
                    <Text fontSize={'lg'} textAlign={'center'}>Delete shoe </Text>
                    <Flex>
                        <Input type='name'
                            placeholder='search shoe'
                            ml={6}
                            pl={4}
                            mr={6}
                            mt={6}
                            onChange={(e) => setSearch(e.target.value)}
                            variant={'flushed'}
                            focusBorderColor='black'
                        />
                        <Button bg='#F2613F' mt='6' type='submit'>Search Shoe</Button>
                    </Flex>

                </Box>
            </form>

            {dbData.length > 0 ?
                <TableContainer mt={8}>
                    <Table colorScheme='teal'>
                        <Thead>
                            <Tr color={'white'}>
                                <Th>Shoe Name</Th>
                                <Th>Description</Th>
                                <Th isNumeric>Price</Th>
                            </Tr>
                        </Thead>
                        {dbData.map(data => (
                            <Tbody>
                                <Tr>
                                    <Td>{data.shoes_name}</Td>
                                    <Td>{data.description}</Td>
                                    <Td isNumeric>{data.price}</Td>
                                </Tr>
                            </Tbody>
                        ))}
                    </Table>
                </TableContainer>
                : <Center mt={8}>
                    <Text>No Shoes to display</Text>
                </Center>}
        </>
    )
}

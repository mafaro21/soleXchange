import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
import AdminSidebar from './AdminSidebar'


export default function Admin() {
    return (
        <>
            <Box bg={'#481E14'} color={'white'}>
                <Flex h="100vh">
                    {/* Sidebar */}
                    <AdminSidebar />

                    {/* Main Content */}
                    <Flex flex="1" direction="column" p="6" >
                        <Heading size="lg" mb="4">With great powers come great responsibility</Heading>
                        <Flex mb="4">
                            <Box w="50%" p="4" >
                                <Box p="4" borderRadius="md" bg={'black'}>
                                    <Heading size="md" mb="2">Total Users</Heading>
                                    <Text>1000</Text>
                                </Box>
                            </Box>
                            <Box w="50%" p="4">
                                <Box p="4" borderRadius="md" bg={'black'}>
                                    <Heading size="md" mb="2">Total Products</Heading>
                                    <Text>10,000</Text>
                                </Box>
                            </Box>
                        </Flex>

                        {/* Add more sections like Recent Orders, Charts, etc. */}
                    </Flex>
                </Flex>
            </Box>

        </>
    )
}

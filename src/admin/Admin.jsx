import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

export default function Admin() {
    return (
        <>
            <Box bg={'#25292a'} color={'white'}>
                <Flex h="100vh">
                    {/* Sidebar */}
                    <Box w="260px" bg="gray.800" color="white" p="4" flexDirection="column">
                        <Flex flexDirection="column">
                            <Heading size="md" mb="4">Dashboard</Heading>
                            <Box variant="link" color="white" mb="4">Analytics</Box>
                            <Box variant="link" color="white" mb="4">Orders</Box>
                            <Box variant="link" color="white" mb="4">Customers</Box>
                        </Flex>
                        <Box style={{ marginTop: '190%' }}>
                            username
                        </Box>
                    </Box>

                    {/* Main Content */}
                    <Flex flex="1" direction="column" p="6" >
                        <Heading size="lg" mb="4">Analytics Overview</Heading>
                        <Flex mb="4">
                            <Box w="50%" p="4" >
                                <Box p="4" borderRadius="md" bg={'black'}>
                                    <Heading size="md" mb="2">Total Users</Heading>
                                    <Text>1000</Text>
                                </Box>
                            </Box>
                            <Box w="50%" p="4">
                                <Box p="4" borderRadius="md" bg={'black'}>
                                    <Heading size="md" mb="2">Total Revenue</Heading>
                                    <Text>$10,000</Text>
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

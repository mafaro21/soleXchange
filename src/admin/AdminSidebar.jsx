import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { ArrowRightIcon } from '@chakra-ui/icons'

export default function AdminSidebar() {
    let location = useLocation()
    const path = location.pathname
    // console.log(path)
    return (
        <>
            <Box w="260px" bg={'black'} color="white" p="6" flexDirection="column">
                <Flex flexDirection="column">
                    {path === '/admin' ?
                        <Link to="/admin">
                            <Flex>
                                <ArrowRightIcon mt={1} ml={1} color={'#F2613F'} />
                                <Heading size="md" mb="4" ml={2}>Dashboard</Heading>

                            </Flex>
                        </Link>
                        :
                        <Link to="/admin"><Heading size="md" mb="4">Dashboard</Heading></Link>
                    }
                    <Box variant="link" color="white" mb="4">Analytics</Box>
                    <Box variant="link" color="white" mb="4">Orders</Box>

                    {path === '/admin/product' ?
                        <Flex>
                            <ArrowRightIcon mt={1} ml={1} color={'#F2613F'} />
                            <Box variant="link" color="white" mb="4" ml={2} as='b'>Product</Box>

                        </Flex>
                        :
                        <Link to="/admin/product"><Box variant="link" color="white" mb="4">Product</Box></Link>
                    }

                    <Box variant="link" color="white" mb="4">Customers</Box>
                </Flex>
            </Box>
        </>
    )
}

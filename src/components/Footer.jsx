import React from 'react'

import { Box, Center, Container, Flex, HStack, Image, MenuButton, Spacer, Text, Button } from '@chakra-ui/react'

export default function Footer() {
    return (
        <>
            <Box bg='#25292a' p='9' style={{ color: 'white' }} mt={'8'}>
                <Container maxW='container.2xl'>
                    <Box bg="" py={8} px={4}>
                        <Flex justifyContent="space-between">
                            <Box>
                                <Text fontWeight="bold" mb={2}>Section 1</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" mb={2}>Section 2</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" mb={2}>Section 3</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
            </Box>

            <Box bg='black' color='white' p='2'>
                <Center>© soleXchange '24</Center>
            </Box>
        </>
    )
}

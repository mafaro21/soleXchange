import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

export default function Error500() {
    { document.title = 'Error' }
    return (
        <>
            <Box h='100vh' bg={'#481E14'} p={160} color={'white'}>
                <Center>
                    <Text fontSize={'6xl'} as={'kbd'}>Error 500</Text>
                </Center>
                <Center>
                    <Text fontSize={'3xl'} as={'kbd'}>There has been a problem connecting to the database</Text>
                </Center>
                <Center>
                    <Text fontSize={'2xl'} mt={3}>Check your internet</Text>
                </Center>
            </Box>
        </>
    )
}

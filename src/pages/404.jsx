import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Error() {
    return (
        <>
            <Box h='100vh' bg={'#481E14'} p={16} color={'white'}>
                <Center>
                    <Text fontSize={'6xl'} as={'kbd'}>404</Text>
                </Center>
                <Center>
                    <Flex>
                        <Text fontSize={'3xl'} as={'kbd'}>What you were looking for was&nbsp;</Text>
                        <Text fontSize={'xl'} as={'s'}>removed by the russians</Text>
                    </Flex>
                </Center>
            </Box>
        </>
    )
}

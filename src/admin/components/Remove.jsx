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

    return (
        <>
            <Box mt={3} p={7} borderRadius={'12px'} style={{ border: '2px solid #9B3922' }}>
                <Text fontSize={'lg'} textAlign={'center'}>Delete shoe </Text>
                <Flex>
                    <Input type='name'
                        placeholder='search shoe'
                        mr={6}
                        ml={6}
                        mt={6}
                        pl={4}
                        variant={'flushed'}
                        focusBorderColor='black'
                    // onChange={(e) => setName(e.target.value)}
                    // isInvalid={errorDiv ? 'red' : ''}
                    />
                    <Button bg='#F2613F' mt='6'>Search Shoe</Button>
                </Flex>

            </Box>
        </>
    )
}

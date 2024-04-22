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
            <Box bg={'black'} p={7}>
                <Text textAlign={'center'}>Delete shoe </Text>
                <Input type='name'
                    placeholder='search shoe'
                    ml={6}
                    mt={6}
                    variant={'flushed'}
                // onChange={(e) => setName(e.target.value)}
                // isInvalid={errorDiv ? 'red' : ''}
                />
            </Box>
        </>
    )
}

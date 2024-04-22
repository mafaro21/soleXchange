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


export default function Edit() {
    const toast = useToast()

    const [search, setSearch] = useState('')

    const handleSearch = () => {
        const searchInfo = {
            search: search
        }

        axios.get('http://localhost:8888/sole/search', search)
            .then((res) => {
                console.log(search)
                console.log(res.data)
                toast({
                    title: "Shoe added",
                    description: "You've added a new shoe",
                    status: "info",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
            .catch((err) => {
                console.log(err.data)
                toast({
                    title: "Shoe added",
                    description: "You've added a new shoe",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
    }
    return (
        <>
            <Box bg={'black'} p={7}>
                <Text textAlign={'center'}>Edit shoe details</Text>
                <Flex>
                    <Input type='name'
                        placeholder='search shoe'
                        ml={6}
                        mt={6}
                        onChange={(e) => setSearch(e.target.value)}
                        variant={'flushed'}
                    // isInvalid={errorDiv ? 'red' : ''}
                    />
                    <Button bg='#e66063' mt='6' onClick={handleSearch}>Search Shoe</Button>

                </Flex>
            </Box>

        </>
    )
}

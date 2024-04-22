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

export default function Add() {
    const toast = useToast()

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [gender, setGender] = useState('')

    const addShoe = [
        { data: 'Name', place: 'Enter the Name', type: 'name', info: (e) => setName(e.target.value) },
        { data: 'Brand', place: 'Enter the Brand', type: 'name', info: (e) => setBrand(e.target.value) },
        { data: 'Price($)', place: 'Enter the Price', type: 'name', info: (e) => setPrice(e.target.value) },
        { data: 'Gender', place: 'Enter the Gender', type: 'img', info: (e) => setGender(e.target.value) },
        // { data: 'Image', place: 'Enter the Name', type: 'name' },
    ]

    const handleAdd = () => {
        const add = {
            name: name,
            brand: brand,
            price: price,
            gender: gender
        }

        axios.post('http://localhost:8888/sole/add', add)
            .then((res) => {
                console.log(res.data)

                toast({
                    title: "Shoe added",
                    description: "You've added a new shoe",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });

                // setName && setBrand && setPrice && setGender === ''
            })
            .catch((err) => {
                console.log(err)
                toast({
                    title: "Error",
                    description: "kk",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                    position: "top-right",
                });
            })
    }
    return (
        <>
            <Box bg={'#25293a'} p={7} borderRadius={'12px'}>
                <Text textAlign={'center'}>Add a new shoe</Text>
                <VStack spacing={4} mt='' p='9'>
                    {/* {errorMessage} */}
                    {addShoe.map((add, index) =>

                        <FormControl>
                            <Flex>
                                <FormLabel mt={2}>{add.data} </FormLabel>
                                <Input type={add.type}
                                    placeholder={add.place}
                                    ml={6}
                                    onChange={add.info}
                                    variant={'flushed'}
                                    isRequired={'true'}
                                // focusBorderColor='#e66063'
                                // isInvalid={errorDiv ? 'red' : ''}
                                />
                            </Flex>
                        </FormControl>
                    )}
                    <Button bg='#e66063' mt='3' onClick={handleAdd}>Add Shoe</Button>
                </VStack>
            </Box>
        </>
    )
}

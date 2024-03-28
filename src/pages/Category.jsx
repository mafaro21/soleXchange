import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Center, Container, Image, Text, VStack, Flex, Card, Heading, Stack, FormControl, FormLabel, Checkbox, Button, SimpleGrid } from '@chakra-ui/react'
import adi from '../img/Adidas.jpg'
import adi1 from '../img/adi1.jpg'
import adi2 from '../img/adi2.jpg'
import crocs from '../img/crocs.webp'
import nike1 from '../img/nik.png'
import nike2 from '../img/Nike.jpg'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Category() {
    const { brand } = useParams()
    const [shoes, setShoes] = useState([])

    useEffect(() => {
        fetchShoes(brand);
    }, [brand]);

    const fetchShoes = async (brand) => {
        let data = []

        if (brand === 'adidas') {
            data = [
                { pic1: adi, pic2: adi1, pic3: adi2 }
            ]
        } else if (brand === 'nike') {
            data = [
                { pic1: nike1, pic2: nike2 }
            ]
        }
        setShoes(data)
    }

    return (
        <>
            <Navbar />

            <Box pt={'6'} mt='10'>
                <Container maxW='1450px'>

                    {shoes.map((data, index) => (
                        <Flex mt={8} justifyContent="center" className='img'>
                            <Image src={data.pic1} objectFit="fit" mr={4} />
                            <Image src={data.pic2} objectFit="fit" mr={4} />
                            <Image src={data.pic3} objectFit="fit" mr={4} />
                        </Flex>
                    ))}
                    <Flex mt={8} justifyContent="center">
                        <Box flex="1"  >
                            <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" bg="white" >
                                <Heading size="md" mb={4}>Filters</Heading>
                                <Stack spacing={4}>
                                    <FormControl>
                                        <FormLabel>Category</FormLabel>
                                        <Checkbox>Clothing</Checkbox>
                                        <Checkbox>Electronics</Checkbox>
                                        <Checkbox>Home & Kitchen</Checkbox>
                                        <Checkbox>Books</Checkbox>
                                        {/* Add more categories as needed */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Price Range</FormLabel>
                                        <Checkbox>$0 - $25</Checkbox>
                                        <Checkbox>$25 - $50</Checkbox>
                                        <Checkbox>$50 - $100</Checkbox>
                                        <Checkbox>$100+</Checkbox>
                                        {/* Add more price ranges as needed */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Brand</FormLabel>
                                        <Checkbox>Nike</Checkbox>
                                        <Checkbox>Apple</Checkbox>
                                        <Checkbox>Samsung</Checkbox>
                                        <Checkbox>Adidas</Checkbox>
                                        {/* Add more brands as needed */}
                                    </FormControl>
                                </Stack>
                                <Button mt={4} colorScheme="blue" size="sm">Apply Filters</Button>
                            </Box>
                        </Box>


                        <Box flex="3" ml={4} bg={''} maxW={'2050px'}>
                            <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4} p={1}>
                                <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                                    <Image src={crocs} />
                                    <Text mt={5} as={'b'}>sdfs</Text>
                                    <Text mt={1}>$sfsf</Text>
                                    <Text mt={1}>sdfs</Text>
                                </Box>
                                <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                                    <Image src={crocs} />
                                    <Text mt={5} as={'b'}>sdfs</Text>
                                    <Text mt={1}>$sfsf</Text>
                                    <Text mt={1}>sdfs</Text>
                                </Box>
                                <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                                    <Image src={crocs} />
                                    <Text mt={5} as={'b'}>sdfs</Text>
                                    <Text mt={1}>$sfsf</Text>
                                    <Text mt={1}>sdfs</Text>
                                </Box>
                                <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                                    <Image src={crocs} />
                                    <Text mt={5} as={'b'}>sdfs</Text>
                                    <Text mt={1}>$sfsf</Text>
                                    <Text mt={1}>sdfs</Text>
                                </Box>
                                <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                                    <Image src={crocs} />
                                    <Text mt={5} as={'b'}>sdfs</Text>
                                    <Text mt={1}>$sfsf</Text>
                                    <Text mt={1}>sdfs</Text>
                                </Box>
                                <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
                                    <Image src={crocs} />
                                    <Text mt={5} as={'b'}>sdfs</Text>
                                    <Text mt={1}>$sfsf</Text>
                                    <Text mt={1}>sdfs</Text>
                                </Box>
                            </SimpleGrid>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Footer />
        </>
    )
}

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Container, VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function MyAccount() {
    const [data, setData] = useState('')
    const [regDate, setRegDate] = useState('')
    const user = useParams()
    const username = user.userName

    useEffect(() => {
        axios.get(`http://localhost:8888/user/profile/?q=${username}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data[0])
                console.log(data)
                const date = new Date(res.data[0].registration_date)
                const formattedDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date)
                setRegDate(formattedDate)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <Navbar />
            <Box p='9' mt='7' color='white'>
                <Container maxW={'2xl'} bg={'black'} >

                    <VStack p={8} spacing={2} align={'left'}>
                        <Box>
                            {data.user_name}
                        </Box>
                        <Box>
                            {data.email}
                        </Box>
                        <Box>
                            Date Joined: {regDate}
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </>
    )
}

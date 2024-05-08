import {
    Box, Flex,
    useToast
} from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Add from './components/Add'
import Edit from './components/Edit'
// import axios from 'axios'
import Remove from './components/Remove'
import { PointLight } from 'three'

export default function Product() {
    const toast = useToast()
    const [view, setView] = useState('')


    return (
        <>
            <Box bg={'#481E14'} color={'white'}>
                <Flex h="100vh">

                    <AdminSidebar />
                    <Flex flex="1" direction="column" p="6" >
                        {/* add container */}
                        <Flex w='100%' p={8} justifyContent={'space-evenly'}>
                            <Box
                                border={view === 'add' ? '2px solid #F2613F' : '3px solid black'}
                                w='30%'
                                p='4'
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={'17px'}
                                onClick={() => setView('add')}
                                _hover={{ cursor: 'pointer' }}
                            >
                                Add Product
                            </Box>

                            <Box
                                border={view === 'edit' ? '2px solid #F2613F' : '3px solid black'}
                                w='30%'
                                p='4'
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={'17px'}
                                onClick={() => setView('edit')}
                                _hover={{ cursor: 'pointer' }}>
                                Edit Product
                            </Box>

                            <Box
                                border={view === 'remove' ? '2px solid #F2613F' : '3px solid black'}
                                w='30%'
                                p='4'
                                style={{ borderRadius: '16px' }}
                                textAlign={'center'}
                                fontWeight={'bold'}
                                fontSize={'17px'}
                                onClick={() => setView('remove')}
                                _hover={{ cursor: 'pointer' }}>
                                Remove Product
                            </Box>
                        </Flex>

                        {view === 'add' ? <Add /> : ''}
                        {view === 'edit' ? <Edit /> : ''}
                        {view === 'remove' ? <Remove /> : ''}
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

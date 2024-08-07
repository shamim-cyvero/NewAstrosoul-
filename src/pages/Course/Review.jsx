import { Box, Button, Heading, HStack, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import Rating from 'react-rating'

const Review = () => {
    return (
        <>
            <Box w={'100%'} p={5} spacing={5} alignItems={'center'} justifyContent={'center'} boxShadow='lg' mt={'10px'} rounded='md' bg='white'>
                <VStack>
                    <Heading children={'4.7'} color={'#22c35e'} />
                    {/* <Text children={'Rating'} /> */}
                    <Rating
                                emptySymbol={<FaStar color='gray' />}
                                fullSymbol={<FaStar color='tomato' />}
                                initialRating={3}
                                readonly
                            />
                    <Text children={'0 Reviews'} />
                </VStack>
            </Box>
            <form style={{ width: '100%', marginTop: '20px' }}>
                <Heading mb='8px' fontSize={'1.5rem'} children={'Reviews(0)'} />
                <Textarea cols={'3'} rows={'8'} />
                <Button colorScheme='whatsapp' mt='10px' size={'md'}>Post review</Button>
            </form>

        </>
    )
}

export default Review
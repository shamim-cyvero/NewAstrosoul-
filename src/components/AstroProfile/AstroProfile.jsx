import React from 'react'
import Slider from 'react-slick';
import astro1 from '../../assets/astrologerImg/astro1.jpg'
import astro2 from '../../assets/astrologerImg/astro2.jpg'
import astro3 from '../../assets/astrologerImg/astro3.jpg'
import astro4 from '../../assets/astrologerImg/astro4.jpg'
import astro5 from '../../assets/astrologerImg/astro5.jpg'
import astro6 from '../../assets/astrologerImg/astro6.jpg'
import astro7 from '../../assets/astrologerImg/astro7.jpg'
import astro8 from '../../assets/astrologerImg/astro8.jpg'
import { Avatar, Box, Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa6';

const AstroProfile = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },

            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const profileDetails = [
        {
            image: astro1,
            astroName: 'Abhay Sharma',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro2,
            astroName: 'Akansha Khandelwal',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro3,
            astroName: 'Vishnu Dhanuka',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro4,
            astroName: 'Mani Aggarwal',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro5,
            astroName: 'Rajendra Mahapatra',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro6,
            astroName: 'Acharya Panduranga',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro7,
            astroName: 'Revanthi Shridhar',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.5',
            appointment: 'Book a Consultation'
        },
        {
            image: astro8,
            astroName: 'Anubhav Gairola',
            exp: 'Astrology Hindi,English Exp: 5+ Year',
            rating: 'star',
            totalRating: '4.3',
            appointment: 'Book a Consultation'
        },
    ]

    return (
        <>
            <Box style={{ width: "90%", margin: "auto", marginTop: "40px", marginBottom: "60px" }} >
                <Stack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} spacing={2}>
                    <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} direction={{ base: 'column', md: 'row' }} flexWrap={'wrap'} spacing={2}>
                        <VStack alignItems={'flex-start'}>
                            <Heading children={'Astrologers'} color={'#1f3b64'} fontSize={{ base: '1.8rem', md: '1.7rem', lg: '1.5rem' }} />
                            <HStack>
                                <Text children={'#Discover your path with top astrologers -'} fontSize={{ base: '1.1rem', md: '1rem', lg: '.9rem' }} fontWeight={'350'} />
                                <span style={{ fontSize: "1rem", fontWeight: "600" }}> Book an astrology consultation</span>
                            </HStack>

                        </VStack>
                        <Button colorScheme='black' variant='outline' size={{ base: 'sm', md: 'md' }}>View All</Button>
                    </HStack>
                </Stack>

                <Slider {...settings}>
                    {
                        profileDetails && profileDetails.map((item) => (
                            <Box key={item.astroName} w={'100%'} m={'20px auto'} p={'10px'} mt={'20px'} borderRadius={'10px'} >
                                <VStack w={'98%'} h={'250px'} alignItems={'center'} justifyContent={'center'} spacing={2} p={'6px 0px'} boxShadow='lg' rounded='md' bg='white'>
                                    <Avatar name='Dan Abrahmov' src={item.image} size={'lg'} />
                                    <Heading children={item.astroName} color={'#1f3b64'} fontSize={'1.1rem'} mb={'10px'} textAlign={'center'} />
                                    <Text children={item.exp} fontSize={'.9rem'} color={'grey'} fontWeight={'400'}textAlign={'center'}  />
                                    <HStack spacing={2} textAlign={'center'}>
                                        <Rating
                                            emptySymbol={<FaStar color='gray' />}
                                            fullSymbol={<FaStar color='tomato' />}
                                            initialRating={item.totalRating}
                                            readonly
                                        />
                                        <Button colorScheme='whatsapp' variant='solid' size={'xs'} fontSize={'.8rem'}>
                                            {item.totalRating}
                                        </Button>
                                    </HStack>
                                    <Button colorScheme='whatsapp' size={'sm'}>{item.appointment}</Button>
                                </VStack>
                            </Box>


                        ))
                    }

                </Slider >
            </Box >
        </>
    )
}

export default AstroProfile
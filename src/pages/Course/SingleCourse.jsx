import React from 'react'
import './SingleCourse.css'
// import medical from '../../assets/SingleCourseImg/medical.jpg'
import medical from "../../assets/contactUsImg/astrologybanner.png";
import astro10 from '../../assets/astrologerImg/astro10.png'


import { Avatar, Box, Button, Heading, HStack, IconButton, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { RiVidiconLine } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Information from './Information';
import Content from './Content';
import Review from './Review';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa6';

const SingleCourse = () => {
    // const provideBenefits =[
    //     {
    //         Icon:RiVidiconLine,
    //         heading:'On Demands Videos'
    //     },
    //     {
    //         icon:{RiVidiconLine},
    //         heading:'Certification Course'
    //     },
    //     {
    //         icon:{RiVidiconLine},
    //         heading:'Course Fees -'
    //     },
    // ]

    return (
        <>
            <div className="singleCourseBg">
                <Heading children={'Medical Astrology'} textAlign={'center'} mb={'10px'} />
                <Stack w={'100%'} alignItems={'center'} spacing={4} justifyContent={'center'} direction={{ base: 'column', md: 'column', lg: 'row' }}>
                    <VStack w={{ base: '90%', md: '100%', lg: '50%' }}>
                        <Image src={medical} alt={medical} w={['100%', '100%', '70%']} />
                    </VStack>

                    <VStack w={{ base: '100%', md: '100%', lg: '50%' }} spacing={4}>
                        <HStack w={['90%', '90%', '65%']} boxShadow='lg' p='2' rounded='md' bg='white'>
                            <IconButton colorScheme='whatsapp' icon={<RiVidiconLine />} isRound={true} fontSize='25px' />
                            <Text children={'On Demand Videos'} fontSize={['1.2rem', '1.6rem']} fontWeight={'600'} />
                        </HStack>
                        <HStack w={['90%', '90%', '65%']} boxShadow='lg' p='2' rounded='md' bg='white'>
                            <IconButton colorScheme='whatsapp' icon={<IoShieldCheckmark />} isRound={true} fontSize='25px' />
                            <Text children={'Certification Course '} fontSize={['1.2rem', '1.6rem']} fontWeight={'600'} />
                        </HStack>
                        <HStack w={['90%', '90%', '65%']} boxShadow='lg' p='2' rounded='md' bg='white'>
                            <IconButton colorScheme='whatsapp' icon={<HiMiniCurrencyRupee />} isRound={true} fontSize='25px' />
                            <Text fontSize={['1.2rem', '1.6rem']} fontWeight={'600'}>Course Fees - <span style={{ fontWeight: '700', color: '#22c35e' }}>14999/-</span></Text>
                        </HStack>

                    </VStack>
                </Stack>
            </div>

            <Stack w={['100%','90%']} m={'40px auto'} spacing={4} direction={{ base: 'column', md: 'row', lg: 'row' }}>
                <HStack  justifyContent={'center'} spacing={4} alignItems={'center'} alignContent={'flex-start'} w={{ base: '100%', md: '90%', lg: '65%' }} flexWrap={'wrap'} >
                    <VStack w={'100%'}>
                        <Tabs w={{base:'100%',md:'98%'}} m={'5px auto'} size={'md'} >
                            <TabList bg={'#1f3b64'} color={'white'} rounded={'lg'} p={2}>
                                <Tab w={'30%'} _selected={{ borderBottom: '3px solid green' }}>Information</Tab>
                                <Tab w={'30%'} _selected={{ borderBottom: '3px solid green' }}>Content(7)</Tab>
                                <Tab w={'30%'} _selected={{ borderBottom: '3px solid green' }}> Reviews(0)</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Information />
                                </TabPanel>
                                <TabPanel>
                                  <Content />
                                </TabPanel>
                                <TabPanel>
                                  <Review />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </VStack>

                </HStack>

                <VStack w={{ base: '100%', md: '40%', lg: '35%' }} alignItems={'self-start'} >

                    <Box w={'100%'} alignItems={'flex-start'} boxShadow='lg' p='4' rounded='md' bg='white'>

                        <VStack w={'100%'} spacing={3} >
                            <del style={{ fontSize: '1.2rem', fontWeight: '400' }}>₹20,000</del>
                            <Heading children={'₹14,999'} color={'#22c35e'} />
                            <Button w={'100%'} size={'lg'} colorScheme='blue' > Buy now!</Button>
                            <Button w={'100%'} size={'lg'} colorScheme='whatsapp' variant='outline'> Pay in Installments</Button>
                            {/* <Button w={'100%'} size={'lg'} colorScheme='whatsapp' > Add to Cart</Button> */}
                        </VStack>
                        {/* <Text fontSize={'1.1rem'} fontWeight={'700'} mt={'10px'} children={'This Course includes:'} /> */}
                    </Box>

                    <Box w={'100%'} mt={'15px'} boxShadow='lg' p='4' rounded='md' bg='white'>
                        <VStack alignItems={'flex-start'} w={'100%'} spacing={4}>
                            <Heading children={'Course specifications'} fontSize={'1.3rem'} fontWeight={'700'} borderBottom={'3px solid #43d477'} p={'5px 0px'} />

                            <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                <Text display='flex' alignItems='center' fontWeight={'400'} fontSize={['1.2rem', '1rem']}><FaFileAlt size={22} />Files:</Text>
                                <Text children={'7'} fontSize={['1.2rem', '1rem']} fontWeight={'400'} />
                            </HStack>
                            <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                <Text display='flex' alignItems='center' fontWeight={'400'} fontSize={['1.2rem', '1rem']}><MdDateRange size={22} />Created date:</Text>
                                <Text children={'5 May 2024'} fontSize={['1.2rem', '1rem']} fontWeight={'400'} />
                            </HStack>
                            <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                <Text display='flex' alignItems='center' fontWeight={'400'} fontSize={['1.2rem', '1rem']}><MdDateRange size={22} />Access Period:</Text>
                                <Text children={'90 Days'} fontSize={['1.2rem', '1rem']} fontWeight={'400'} />
                            </HStack>
                        </VStack>
                    </Box>

              
                    <Box w={'300px'} m={'20px auto'} p={'10px'} mt={'20px'} borderRadius={'10px'} >
                    <VStack w={'98%'} h={'250px'} alignItems={'center'} justifyContent={'center'} spacing={2} p={'6px 0px'} boxShadow='lg' rounded='md' bg='white'>
                        <Avatar name='Dan Abrahmov' src={astro10} size={'lg'} />
                        <Heading children={'Mr.Rahull Verma'} color={'#1f3b64'} fontSize={'1.1rem'} mb={'10px'} textAlign={'center'} />
                        <Text children={'Vedic,Relationship,Numerology Hindi,English Exp: 6+ Year'} fontSize={'.9rem'} color={'grey'} fontWeight={'400'}textAlign={'center'}  />
                        <HStack spacing={2} textAlign={'center'}>
                            <Rating
                                emptySymbol={<FaStar color='gray' />}
                                fullSymbol={<FaStar color='tomato' />}
                                initialRating={4}
                                readonly
                            />
                            <Button colorScheme='whatsapp' variant='solid' size={'xs'} fontSize={'.8rem'}>
                                {4}
                            </Button>
                        </HStack>
                        <Button colorScheme='whatsapp' size={'sm'}>{'Book a Consultation'}</Button>
                    </VStack>
                </Box>
                </VStack>
            </Stack>
        </>
    )
}

export default SingleCourse
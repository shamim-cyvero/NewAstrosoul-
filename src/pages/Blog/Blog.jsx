import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './Blog.css'
import blogBanner from '../../assets/BlogPageImg/blogpic.jpg'
import pic5 from '../../assets/BlogPageImg/blog5.jpg'
import pic6 from '../../assets/BlogPageImg/blog6.jpg'
import pic7 from '../../assets/BlogPageImg/blog7.jpg'
import pic8 from '../../assets/BlogPageImg/blog8.jpg'
import pic9 from '../../assets/BlogPageImg/blog9.jpg'
import pic10 from '../../assets/BlogPageImg/blog10.jpg'
// import BlogData from '../../Components/Blog/BlogData'
import BlogCard from './BlogCard'
import post1 from '../../assets/BlogPageImg/post1.jpg'
import post2 from '../../assets/BlogPageImg/post2.jpg'
import post3 from '../../assets/BlogPageImg/post3.jpg'
import post4 from '../../assets/BlogPageImg/post4.jpg'

import course1 from '../../assets/BlogPageImg/course1.jpg'
import course2 from '../../assets/BlogPageImg/course2.jpg'
import course3 from '../../assets/BlogPageImg/course3.jpg'
// import course3 from '../../assets/BlogPageImg'

const Blog = () => {
  const popularPosts = [
    {
      image: post1,
      heading: 'जन्मकुंडली में सभी ग्रहों की दृष्टि का फल !',
      postDate: '30 AUg 2024'
    },
    {
      image: post2,
      heading: 'How To Find Marriage Date From Kundli',
      postDate: '30 AUg 2024'
    },
    {
      image: post3,
      heading: 'भाग्यांक कैसे निकालें? जानिए,सबसे चमत्कारी भाग्यांक कौन सा है ?',
      postDate: '30 AUg 2024'
    },
    {
      image: post4,
      heading: 'Effects of Mars in Different Houses in Astrology',
      postDate: '30 AUg 2024'
    },
  ]

  const popularCourse = [
    {
      img:course1,
      courseHeading:'Basic Astrology Course',
      coursePrice:'99.0838'
    },
    {
      img:course2,
      courseHeading:'Free Astrology Course',
      coursePrice:'(Hindi)'
    },
    {
      img:course3,
      courseHeading:'Panchang Workshop 2023',
      coursePrice:'398'
    }
  ]
  return (
    <>
      <Box w={'100%'} mb={'20px'}>
        <Image src={blogBanner} alt={'blogBanner'} w={'100%'} h={{ base: '20vh', md: '40vh', lg: '65vh' }} objectFit={'cover'} />
      </Box>
      <Stack w={'90%'} m={'40px auto'}  spacing={4} direction={{ base: 'column', md: 'row', lg: 'row' }}>
        <HStack justifyContent={'center'} spacing={4} alignItems={'center'} alignContent={'flex-start'} w={{ base: '100%', md: '90%', lg: '60%' }}  flexWrap={'wrap'} >
          <BlogCard image={pic5} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />
          <BlogCard image={pic6} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />
          <BlogCard image={pic7} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />
          <BlogCard image={pic8} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />
          <BlogCard image={pic9} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />
          <BlogCard image={pic10} title={'the impact of star monements on your horoscope'} des={'Astrology is a fascinating field that connects the movements of celestial bodies to our everyday lives. For many Indians, horoscopes are not just a curiosity'} />

        </HStack>

        <VStack w={{ base: '100%', md: '40%', lg: '40%' }} alignItems={'self-start'} >

          <Box w={'100%'} boxShadow='lg' p='6' rounded='md' bg='white' border={'1px solid #d3d3d3'}>
            <VStack alignItems={'flex-start'} spacing={2}>
              <Heading children={'Categories'} fontSize={'1.2rem'} fontWeight={'700'} borderBottom={'3px solid #43d477'} p={'5px 0px'}/>
              <Text children={'Astrlogy'} fontSize={'.9rem'} />
              <Text children={'Ayurveda'} fontSize={'.9rem'} />
              <Text children={'Palmistry'} fontSize={'.9rem'} />
              <Text children={'Vastu'} fontSize={'.9rem'} />
              <Text children={'Numerlogy'} fontSize={'.9rem'} />
            </VStack>
          </Box>

          <Box w={'100%'}  mt={'20px'} boxShadow='lg' p='6' rounded='md' bg='white' border={'1px solid #d3d3d3'}>
            <VStack align={'flex-start'} spacing={5}>
              <Heading children={'Popular posts'} fontSize={'1.2rem'} fontWeight={'700'}  borderBottom={'3px solid #43d477'} p={'5px 0px'} />
              {
                popularPosts && popularPosts.map((item) => (
                  <HStack w={'100%'}>
                    <Box w={'39%'}>
                      <Image src={item.image} w={'100%'}  borderRadius={'lg'} />
                    </Box>

                    <Box w={'40%'} alignItems={'flex-start'}>
                      <Heading children={item.heading} mb={'30px'} fontSize={'.9rem'} fontWeight={'500'} w={'100%'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'} />
                      <Text children={item.postDate} fontSize={'.9rem'} color={'grey'} />
                    </Box>

                  </HStack>
                ))
              }
              <Button w={'100%'} colorScheme='whatsapp' mt={'10px'} size={'md'}>View All Posts</Button>
           
            </VStack>
          </Box>
          <Box w={'100%'} mt={'20px'} boxShadow='lg' p='6' rounded='md' bg='white' border={'1px solid #d3d3d3'}>                                                                     
            <VStack align={'flex-start'} spacing={5}>
              <Heading children={'Popular Course'} fontSize={'1.2rem'} fontWeight={'700'}  borderBottom={'3px solid #43d477'} p={'5px 0px'} />
              {
                popularCourse && popularCourse.map((item) => (
                  <HStack w={'100%'}>
                    <Box w={'39%'}>
                      <Image src={item.img} w={'100%'} borderRadius={'lg'} />
                    </Box>

                    <Box w={'60%'} alignItems={'flex-start'}>
                      <Heading children={item.courseHeading} mb={'30px'} fontSize={'.9rem'} fontWeight={'500'} w={'100%'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'} />
                      <Text children={item.coursePrice} fontSize={'.9rem'} color={'grey'} />
                    </Box>

                  </HStack>
                ))
              }
              <Button w={'100%'} colorScheme='whatsapp' mt={'10px'} size={'md'}>View All Courses</Button>
           
            </VStack>
          </Box>
        </VStack>
      </Stack>
    </>
  )
}

export default Blog
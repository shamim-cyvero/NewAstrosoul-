import React from "react";
import astro1 from "../../assets/astrologerImg/astro1.png";
import astro2 from "../../assets/astrologerImg/astro2.png";
import astro3 from "../../assets/astrologerImg/astro3.png";
import astro4 from "../../assets/astrologerImg/astro4.png";
import astro5 from "../../assets/astrologerImg/astro5.png";
import astro6 from "../../assets/astrologerImg/astro6.png";
import astro7 from "../../assets/astrologerImg/astro7.png";
import astro8 from "../../assets/astrologerImg/astro8.png";
import { Avatar, Button, Heading, HStack, List, ListIcon, ListItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md";

const UserAstrologersProfile = () => {

  const profileDetails = [
    {
      image: astro1,
      astroName: "Abhay Sharma",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro2,
      astroName: "Akansha Khandelwal",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro3,
      astroName: "Vishnu Dhanuka",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro4,
      astroName: "Mani Aggarwal",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro5,
      astroName: "Rajendra Mahapatra",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro6,
      astroName: "Acharya Panduranga",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro7,
      astroName: "Revanthi Shridhar",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.5",
      appointment: "Book a Consultation",
    },
    {
      image: astro8,
      astroName: "Anubhav Gairola",
      exp: "Astrology Hindi,English Exp: 5+ Year",
      rating: "star",
      totalRating: "4.3",
      appointment: "Book a Consultation",
    },
  ];

  // const singleProfile = {
  //   image: astro1,
  //   astroName: "Abhay Sharma",
  //   Specialist:'Astrology | Vastu Specialist',
  //   exp: "Astrology Hindi,English Exp: 5+ Year",
  //   rating: "star",
  //   totalRating: "4.5",
  //   appointment: "Book a Consultation",
  // };
  const singleProfile = 
  {
    image: astro1,
    astroName: 'Mr.Rahull Verma',
    exp: 'Vedic,Relationship,Numerology Hindi,English Exp: 6+ Year',
    rating: 'star',
  totalRating: '4.5',
    appointment: 'Book a Consultation'    
  }

  return (
    <>
        <Stack bgColor={'white'} borderRadius={'10px'} boxShadow='lg' spacing={'10'}  w={'80%'} p={'6'} m={'1.5vmax auto'} alignItems={'center'} justifyContent={'flex-start'} direction={{base:'column',md:'row',lg:'row'}}>
            <Avatar w={'15vmax'} h={'15vmax'} src={singleProfile.image} name={singleProfile.astroName} >
              {/* <AvatarBadge  bg='tomato' boxSize='.9em' /> */}
            </Avatar>

            <VStack p={2} spacing={'1'}  alignItems={'flex-start'} >
                <Heading letterSpacing={'4px'}  fontSize={'3xl'} children={singleProfile.astroName} />
                <Text children={singleProfile.Specialist} />
                <HStack >
                    {/* <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='red' />}
                      /> */}
                    <Rating
                      emptySymbol={<FaStar color='gray' />}
                      fullSymbol={<FaStar color='tomato' />}
                      initialRating={singleProfile.totalRating}
                      readonly
                    />
                    <Button size={'sm'} colorScheme={'whatsapp'} children={singleProfile.totalRating} />
                </HStack>
                <Text children={'₹50 / Min'} />

            </VStack>
        </Stack>

        {/* tabs start */}
        <Tabs w={'80%'} m={'1vmax auto'}  size='md' >
        <TabList p={'4'}>
          <Tab _selected={{borderBottom:'3px solid green' }} mr={'2vmax'}>About</Tab>
          <Tab _selected={{borderBottom:'3px solid green' }}>More Details</Tab>
        </TabList>

        <TabPanels >

          <TabPanel p={'4'}>
            <VStack mb={'2vmax'}  alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={'xl'} children={'Education'} />
              <List spacing={1}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                    Associate in Physical Therapy from University of British Columbia
                </ListItem>   
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Bachelor of Arts in Psychology from Duke University
                </ListItem>     
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  Master of Public Health from Cornell University
                </ListItem>            
              </List>
            </VStack>

            <VStack mb={'2vmax'} alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={'xl'} children={'Experiences'} />
              <List spacing={1}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color='green.500' />
                  10 years of experience working with astrolok
                </ListItem>             
              </List>
            </VStack>

            <VStack alignItems={'flex-start'} spacing={'0'} >
              <Heading m={'1vmax 0'} fontSize={'xl'} children={'About'} />
              <Text children={`
                Mr. Narendra Umrikar, a globally recognized Indian Vaastu Astrologer with 6+ years of expertise. 
                His journey commenced at Asttrolok, and through dedication and study, he obtained an M.Phil in Vaastu Shastra.
                Now, with over 16 years of experience, he's a cornerstone in the field and a member of the Institute of 
                Vedic Vaastu & Research Foundation, Indore.
                `} 
              />

            </VStack>
          </TabPanel>



          <TabPanel p={'4'}>
            <VStack justifyContent={'center'} alignItems={'center'} >
              <Text children={`
                  Instructor is not available for meetings...
                `} 
              />
              {/*            

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()} // Disable past dates
                inline
                showDisabledMonthNavigation
                withPortal
                
              /> */}

            </VStack>
          </TabPanel>

        </TabPanels>
      </Tabs>
    </>
  );
};

export default UserAstrologersProfile;

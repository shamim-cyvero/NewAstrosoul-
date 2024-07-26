import React from "react";
import astro1 from "../../assets/astrologerImg/astro1.png";
import astro2 from "../../assets/astrologerImg/astro2.png";
import astro3 from "../../assets/astrologerImg/astro3.png";
import astro4 from "../../assets/astrologerImg/astro4.png";
import astro5 from "../../assets/astrologerImg/astro5.png";
import astro6 from "../../assets/astrologerImg/astro6.png";
import astro7 from "../../assets/astrologerImg/astro7.png";
import astro8 from "../../assets/astrologerImg/astro8.png";
import { Avatar, Button, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";

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

  const singleProfile = {
    image: astro1,
    astroName: "Abhay Sharma",
    Specialist:'Astrology | Vastu Specialist',
    exp: "Astrology Hindi,English Exp: 5+ Year",
    rating: "star",
    totalRating: "4.5",
    appointment: "Book a Consultation",
  };

  return (
    <>
        <Stack border={'1px solid red'} w={'90%'} m={'0 auto'} direction={{base:'column',md:'column',lg:'row'}}>
            <Avatar src={singleProfile.image} name={singleProfile.astroName} />
            <VStack border={'1px solid red'}>
                <Heading children={singleProfile.astroName} />
                <Text children={singleProfile.Specialist} />
                <HStack >
                    <Text children={singleProfile.rating} />
                    <Button colorScheme={'whatsapp'} children={singleProfile.totalRating} />

                </HStack>

            </VStack>
        </Stack>
    </>
  );
};

export default UserAstrologersProfile;

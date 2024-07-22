import { Button, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack, } from "@chakra-ui/react";
import React from "react";
import { FiPhoneIncoming } from "react-icons/fi";

const JoinBtn = () => {

  return (
    <>
      <Stack w={'90%'} m={'auto'} direction={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={'space-around'}>
        <Stack w={'100%'} bg={'#22c35e'} color={'white'} p={'20px 0'} rounded='xl' alignItems={'center'} justifyContent={'space-around'} direction={{ base: 'column', md: 'row' }}>
          <VStack w={['90%', '90%', '45%']} alignItems={'flex-start'}>
            <Heading children={"Join us today"} fontSize={'2.5rem'} />
            <Text children={
                "#We will send the best deals and offers to your email."} />
          </VStack>
{/* <form style={{width:"60%"}} > */}

          <InputGroup w={['90%', '90%', '45%']} boxShadow='md' rounded='md' p={['5px', '10px']} borderRadius={'35px'} bg={'white'}>
            <Input required type="email" placeholder="Enter your email" fontSize={'18x'} w={'100%'} border={'none'} outline={'none'} />
            <Button type="submit" colorScheme="whatsapp" size={['sm', 'md', 'lg']} w={'25%'} borderRadius={'35px'}>
              Join
            </Button>
          </InputGroup>
{/* </form> */}
        </Stack>
      </Stack>
    </>
  );
};

export default JoinBtn;

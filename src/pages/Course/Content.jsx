import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, HStack, IconButton, Stack, Text, VStack } from '@chakra-ui/react'
import { TbCloudDownload } from "react-icons/tb";
import React from 'react'
import { RiFunctionLine } from "react-icons/ri";
import { RiVidiconLine } from "react-icons/ri";
const Content = () => {
    const Accor_content = [
        {
            // Icon:RiFunctionLine,
            name: 'Introduction Class',
            ClassCount: '(01)',
            vedio: [{
                title: 'Introduction class and hhh Division of sky',
                vedioMb: '923.87 MB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '923.87 MB'
            }
            ],

        },
        {
            name: 'Class 2 29/04/2024',
            ClassCount: '(04)',
            vedio: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '1.31 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.31 GB'
            }
            ],

        },
        {
            // Icon:RiFunctionLine,
            name: 'Class 3 29/04/2024',
            ClassCount: '(01)',
            vedio: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '1,002.75 MB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1,002.75 MB'
            }
            ],

        },
        {
            // Icon:RiFunctionLine,
            name: 'Class 4 29/04/2024',
            ClassCount: '(04)',
            vedio: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '1.28 GB'
            },
            ],

        },
        {
            // Icon:RiFunctionLine,
            name: 'Class 5 29/04/2024',
            ClassCount: '(03)',
            vedio: [{
                title: 'Introduction class and Division of sky',
                vedioMb: '923.87 MB'
            },
            {
                title: 'Introduction class and Division of sky',
                vedioMb: '923.87 MB'
            }
            ],

        },
    ]
    return (
        <>
            <Accordion allowToggle  w={'100%'}>
                {
                    Accor_content && Accor_content.map((item) => (
                        <AccordionItem w={'100%'}>
                            <h2>
                                <AccordionButton w={'100%'}>
                                    <HStack as='span' w='100%' alignItems='center' justifyContent='space-between'>
                                        <HStack w='auto' pt={['0px','10px']} pb={['0px','10px']}>
                                            <IconButton colorScheme='whatsapp' icon={<RiFunctionLine />} isRound={true} fontSize='25px' />
                                            <Text children={item.name} fontSize={['1rem', '1.2rem']} fontWeight='600' />
                                        </HStack>
                                        <Text children={item.ClassCount} mr={'5px'} fontWeight={'600'} />
                                    </HStack>
                                    <AccordionIcon ml={'5px'}/>
                                </AccordionButton>

                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} spacing={5}>
                                    {
                                        item.vedio.map((item) => (
                                            <Stack w={'100%'} alignItems={'flex-start'} justifyContent={'space-between'} direction={{base:'column',md:'column',lg:'row'}}>
                                                <HStack w={{base:'100%',md:'100%',lg:'75%'}}>
                                                    <RiVidiconLine size={25} />
                                                    <Text fontSize={['.9rem', '1.1rem']} fontWeight='600' mr={['0px','30px']} >{item.title} </Text>
                                                </HStack>

                                                <HStack  w={['100%','100%','25%']}>
                                                    <TbCloudDownload />
                                                    <span >{item.vedioMb}</span>
                                                </HStack>

                                                <Button size={'md'}>Play</Button>
                                            </Stack>
                                        ))
                                    }

                                </VStack>

                            </AccordionPanel>
                        </AccordionItem>

                    ))
                }

            </Accordion>
        </>
    )
}

export default Content
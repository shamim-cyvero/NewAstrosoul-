import { Box, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import vedio1 from '../../assets/astroVedioImg/vedio1.jpg';
import vedio2 from '../../assets/astroVedioImg/vedio2.jpg';
import vedio3 from '../../assets/astroVedioImg/vedio3.jpg';
import vedio4 from '../../assets/astroVedioImg/vedio4.jpg';

const AstroVedio = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    const astrovedioData = [
        {
            image: vedio1,
            url: 'https://www.youtube.com/embed/IAC39vtGa3E'
        },
        {
            image: vedio2,
            url: 'https://www.youtube.com/embed/hzDbJn9BwA4'
        },
        {
            image: vedio3,
            url: 'https://www.youtube.com/embed/XMsNq9YSWLs'
        },
        {
            image: vedio4,
            url: 'https://www.youtube.com/embed/bbr61CaXOxE'
        }
    ];

    const youtubeHandler = (url) => {
        setCurrentVideoUrl(url);
        onOpen();
    };

    return (
        <>
            <Stack w={'90%'} m={'40px auto'}  spacing={4} alignItems={'center'} justifyContent={'center'} direction={{base:'column',md:'row'}} flexWrap={'wrap'}>
                {astrovedioData.map((item, index) => (
                    <Box key={index} w={'260px'}  boxShadow='lg'  rounded='md' bg='white' onClick={() => youtubeHandler(item.url)}>
                        <Image src={item.image} alt={`video-${index}`} w={'100%'} />
                    </Box>
                ))}
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <iframe src={currentVideoUrl} height="315" width="100%" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AstroVedio;

import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Menubar = () => {
  return (
    <>
    <SimpleGrid columns={2} gap="2rem">
        <Box>
            <Link to='/currentEvents'/>
            <Link to='/currentEvents'/>
            
        </Box>
        <Box>
       
    <Swiper
      // install Swiper modules
      modules={[ A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    
    </Swiper>

        </Box>
    </SimpleGrid>
    </>
  )
}

export default Menubar
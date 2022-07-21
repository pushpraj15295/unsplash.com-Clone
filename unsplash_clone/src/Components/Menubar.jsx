import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import '../App.css'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Menubar = () => {
  return (
    <>
      <Flex gap="1rem" alignItems="left" m="13px" color="grey" >
        <Flex
          gap="1.5rem"
          alignItems="center"
          paddingRight="2rem"
          borderRight="2px solid lightgrey"
        >
          <Box className="border-b">
            {" "}
            <Link to="/editorial">Editorial</Link>
          </Box>

          <Box className="border-b">
            <Link to="/following">Following</Link>
          </Box>
        </Flex>
        <Box width="88%">
          <Swiper
            // install Swiper modules

            modules={[Navigation]}
            // spaceBetween={0}
            slidesPerView={10}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="border-b">
              <Link to="/following">Following</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/animals">Animals</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/architecture">Architecture</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/artsCulture">ArtsCulture</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/athletics">Athletics</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/businessWork">BusinessWork</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/currentEvents">CurrentEvents</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/experimental">Experimental</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/fashion">Fashion</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/film">Film</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/foodDrink">FoodDrink</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/healthWellness">HealthWellness</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/history">History</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/interiors">Interiors</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/nature">Nature</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/people">People</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/spirituality">Spirituality</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/streetPhotography">StreetPhotography</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/texturesPatterns">TexturesPatterns</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/travel">Travel</Link>
            </SwiperSlide>
            <SwiperSlide className="border-b">
              <Link to="/Wallpapers">Wallpapers</Link>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </>
  );
};

export default Menubar;

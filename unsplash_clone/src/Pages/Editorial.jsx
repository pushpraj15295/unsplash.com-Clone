import {
  Box,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import Recomandation from "../PopOver/Recomandation";

import imgsearch from "../icons/imgs.png";
import search from "../icons/search.png";

import React, { useContext } from "react";
import { useState } from "react";
import { editorial } from "../Api";
import "../App.css";
import { ImgContext } from "../Context/ImgContext";
import { useNavigate } from "react-router-dom";

const Editorial = () => {
  
  const {fetchdata} = useContext(ImgContext)

  const nav = useNavigate()

  const [model, setModel] = useState(false);

  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgsrc) => {
    setTempImgSrc(imgsrc);
    setModel(true);
  };

  return (
    <>
      <Box
        pos="relative"
        h="600px"
        bg="rgba(255,0,0,0.1)"
        bgImage="url(https://images.unsplash.com/photo-1528686086515-695fb0f1ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)"
        bgSize="cover"
        // bgSize="cover"
        // pos="absolute",
        top="0"
        right="0"
        left="0"
        bottom="0"
      >
        <Box textAlign="left" paddingTop="200px" paddingLeft="320px">
          <Text color="white" fontSize="50px" fontWeight="bold">
            Unsplash
          </Text>
          <Text color="white" fontSize="20px">
            The internet’s source of freely-usable images. <br />
            Powered by creators everywhere.
          </Text>
          <br />
          <br />
          <Box>
            <InputGroup width="900px">
              <InputLeftElement
                //   pointerEvents='none'
                color="rgb(238,238,238)"
                className="border-ba"
                fontSize="1.2em"
                paddingTop="10px"
                children={
                  <Img
                    cursor="pointer"
                    width="22px"
                    color="lightgray"
                    src={search}
                  />
                }
              />

              <Popover>
                <PopoverTrigger className="border-ba">
                  <Input
                    padding="25px"
                    placeholder="     Search free high resolution-photos"
                    bgColor="rgb(238,238,238)"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                          fetchdata(e.target.value)
                          nav("/search")
                      }}}
                  />
                </PopoverTrigger>

                <Recomandation />
              </Popover>

              <InputRightElement
                color="rgb(238,238,238)"
                fontSize="1.8em"
                className="border-ba"
                paddingTop="10px"
                children={
                  <Img
                    cursor="pointer"
                    width="22px"
                    color="lightgray"
                    src={imgsearch}
                  />
                }
              />
            </InputGroup>
          </Box>
        </Box>
      </Box>

      <br />
      <br />

      {/* ////////////////////////////// */}

      <div style={{ width: "90%", margin: "auto" }}>
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} />
          <i
            onClick={() => setModel(false)}
            style={{ backgroundColor: "white", color: "black" }}
            class="fa-solid fa-xmark-large"
          ></i>
        </div>

        <div className="gallery">
          {editorial.map((item, index) => {
            return (
              <div className="pics" key={index}>
                <img
                  src={item.imgsrc}
                  style={{ width: "100%" }}
                  onClick={() => getImg(item.imgsrc)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Editorial;

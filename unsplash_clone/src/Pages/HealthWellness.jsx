import { Box, Button, Text } from "@chakra-ui/react";
import Recomandation from "../PopOver/Recomandation";

import imgsearch from "../icons/imgs.png";
import search from "../icons/search.png";

import React from "react";
import { useState } from "react";
import { healthy } from "../Api";
import "../App.css";

const HealthWellness = () => {
  const text = "HealthWellness";
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
        bgImage="url(https://images.unsplash.com/photo-1655071516406-08f72078fc52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)"
        bgSize="cover"
        // bgSize="cover"
        // pos="absolute",
        top="0"
        right="0"
        left="0"
        bottom="0"
      >
        <Box textAlign="left" paddingTop="200px" paddingLeft="200px">
          <Text color="white" fontSize="50px" fontWeight="bold">
            {text}
          </Text>
          <Text color="white" fontSize="20px">
            Celebrate a healthy mind, body and soul with photographs that
            showcase <br /> everything from new medical discoveries and
            alternative medicines, to
            <br />
            healthy eating and meditation.
          </Text>

          <br />
          <br />
          <br />

          <Button>
            Submit to &nbsp;<p fontSize="30px">{text}</p>
          </Button>
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
          {healthy.map((item, index) => {
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

export default HealthWellness;

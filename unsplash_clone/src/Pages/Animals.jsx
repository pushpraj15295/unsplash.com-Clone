import { Box, Button, Text } from "@chakra-ui/react";
import Recomandation from "../PopOver/Recomandation";

import imgsearch from "../icons/imgs.png";
import search from "../icons/search.png";

import React from "react";
import { useState } from "react";
import { aanimal } from "../Api";
import "../App.css";

const Animals = () => {
  const text = "Animals";

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
        bgImage="url(https://media.istockphoto.com/photos/wildlife-in-kenya-picture-id998654670?k=20&m=998654670&s=170667a&w=0&h=Ag-4twh8TPi9MV9JDnWM3ZiwXl-SE71NZ1G5rtC7w-c=)"
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
            Exotic wildlife, pet kittens — and everything in between. Uncover
            the <br />
            beauty of the animal kingdom through your screen. <br />
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
          {aanimal.map((item, index) => {
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

export default Animals;

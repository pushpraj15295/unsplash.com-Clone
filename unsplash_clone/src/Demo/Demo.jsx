import React from "react";
import { useState } from "react";
import { editorial } from "../Api";
import "../App.css";

const Demo = () => {
  const [model, setModel] = useState(false);

  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgsrc) => {
    setTempImgSrc(imgsrc);
    setModel(true);
  };

  return (
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
  );
};

export default Demo;

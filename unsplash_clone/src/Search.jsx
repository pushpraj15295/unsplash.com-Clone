import React, { useContext, useState } from 'react'
import { ImgContext } from './Context/ImgContext'
import "./App.css"

const Search = () => {
    const {fdata} = useContext(ImgContext)

    const [model, setModel] = useState(false);

  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgsrc) => {
    setTempImgSrc(imgsrc);
    setModel(true);
  };
  return (
    <>
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
        {fdata.map((item) => {
          return (
            <div className="pics" key={item.id}>
              <img
                src={item.urls.full}
                style={{ width: "100%" }}
                onClick={() => getImg(item.urls.full)}
              />
            </div>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default Search
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Renders from "../Pages/3DRenders";
import Animals from "../Pages/Animals";
import Architecture from "../Pages/Architecture";
import ArtsCulture from "../Pages/ArtsCulture";
import Athletics from "../Pages/Athletics";
import BusinessWork from "../Pages/BusinessWork";
import CurrentEvents from "../Pages/CurrentEvents";
import Editorial from "../Pages/Editorial";
import Experimental from "../Pages/Experimental";
import Fashion from "../Pages/Fashion";
import Film from "../Pages/Film";
import Following from "../Pages/Following";
import FoodDrink from "../Pages/FoodDrink";
import HealthWellness from "../Pages/HealthWellness";
import History from "../Pages/History";
import Interiors from "../Pages/Interiors";
import Nature from "../Pages/Nature";
import People from "../Pages/People";
import Spirituality from "../Pages/Spirituality";
import StreetPhotograph from "../Pages/StreetPhotography";
import TexturesPatterns from "../Pages/TexturesPatterns";
import Travel from "../Pages/Travel";
import Wallpapers from "../Pages/Wallpapers";
import Search from "../Search";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/renders" element={<Renders />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/artsCulture" element={<ArtsCulture />} />
        <Route path="/athletics" element={<Athletics />} />
        <Route path="/businessWork" element={<BusinessWork />} />
        <Route path="/currentEvents" element={<CurrentEvents />} />
        <Route path="/" element={<Editorial />} />
        <Route path="/experimental" element={<Experimental />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/film" element={<Film />} />
        <Route path="/following" element={<Following />} />
        <Route path="/foodDrink" element={<FoodDrink />} />
        <Route path="/healthWellness" element={<HealthWellness />} />
        <Route path="/history" element={<History />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/People" element={<People />} />
        <Route path="/spirituality" element={<Spirituality />} />
        <Route path="/streetPhotography" element={<StreetPhotograph />} />
        <Route path="/texturesPatterns" element={<TexturesPatterns />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

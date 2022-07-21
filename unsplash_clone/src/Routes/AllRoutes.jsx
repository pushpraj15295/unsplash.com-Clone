import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Renders from '../Pages/3DRenders'
import Animals from '../Pages/Animals'
import Architecture from '../Pages/Architecture'
import ArtsCulture from '../Pages/ArtsCulture'
import Athletics from '../Pages/Athletics'
import BusinessWork from '../Pages/BusinessWork'
import CurrentEvents from '../Pages/CurrentEvents'
import Editorial from '../Pages/Editorial'
import Experimental from '../Pages/Experimental'
import Fashion from '../Pages/Fashion'
import Film from '../Pages/Film'
import Following from '../Pages/Following'
import FoodDrink from '../Pages/FoodDrink'
import HealthWellness from '../Pages/HealthWellness'
import History from '../Pages/History'
import Nature from '../Pages/Nature'
import People from '../Pages/People'
import Spirituality from '../Pages/Spirituality'
import StreetPhotography from '../Pages/StreetPhotography'
import TexturesPatterns from '../Pages/TexturesPatterns'
import Travel from '../Pages/Travel'
import Wallpapers from '../Pages/Wallpapers'

const AllRoutes = () => {
  return (
    <>
        <Routes>
             <Route to="/" element={<Home/>} />
             <Route to="/renders" element={<Renders/>}/>
             <Route to="/animals" element={<Animals/>}/>
             <Route to="/architecture" element={<Architecture/>}/>
             <Route to="/artsCulture" element={<ArtsCulture/>}/>
             <Route to="/athletics" element={<Athletics/>}/>
             <Route to="/businessWork" element={<BusinessWork/>}/>
             <Route to="/currentEvents" element={<CurrentEvents/>}/>
             <Route to="/editorial" element={<Editorial/>}/>
             <Route to="/experimental" element={<Experimental/>}/>
             <Route to="/fashion" element={<Fashion/>}/>
             <Route to="/film" element={<Film/>}/>
             <Route to="/following" element={<Following/>}/>
             <Route to="/foodDrink" element={<FoodDrink/>}/>
             <Route to="/healthWellness" element={<HealthWellness/>}/>
             <Route to="/history" element={<History/>}/>
             <Route to="/interiors" element={<Interiors/>}/>
             <Route to="/nature" element={<Nature />}/>
             <Route to="/People" element={<People/>}/>
             <Route to="/spirituality" element={<Spirituality/>}/>
             <Route to="/streetPhotography" element={<StreetPhotography/>}/>
             <Route to="/texturesPatterns" element={<TexturesPatterns/>}/>
             <Route to="/travel" element={<Travel/>}/>
             <Route to="/wallpapers" element={<Wallpapers/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes
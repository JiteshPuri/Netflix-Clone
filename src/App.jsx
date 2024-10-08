import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Burger from "./components/Burger"
import Slider from "./components/Slider"
import { Button } from "@material-tailwind/react"
import { CarouselWithContent } from "./components/CarouselWithContent"
import Horror from "./components/Horror"

function App() {
  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
      </Routes>
      {/* <Slider/> */}
      {/* <Button/> */}
      <CarouselWithContent/>
      <Horror/>
    </>
  )
}

export default App

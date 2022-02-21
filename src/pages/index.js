import React, {useState} from 'react'
import MainSection from '../components/MainSection'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjone, homeObjtwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
        <Sidebar isOpen={isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <MainSection />
        <InfoSection {...homeObjone}/>
        <InfoSection {...homeObjtwo}/>
        <Services />
        <Footer />
    </>
  )
}

export default Home
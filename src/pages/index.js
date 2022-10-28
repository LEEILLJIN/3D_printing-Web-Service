import React, {useState} from 'react'
import MainSection from '../components/MainSection'
import AboutSection from '../components/AboutSection'
import QnASection from '../components/QnASection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { AboutObjone} from '../components/AboutSection/Data'
import { QnAObjone} from '../components/QnASection/Data'
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
        <AboutSection {...AboutObjone}/>
        <QnASection {...QnAObjone}/>
        <Services />
        <Footer />
    </>
  )
}

export default Home
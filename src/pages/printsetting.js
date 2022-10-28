import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import PrintSetting from '../components/PrintSetting'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const PrintSettingPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <PrintSetting />
      <ScrollToTop />
    </>
  )
}

export default PrintSettingPage
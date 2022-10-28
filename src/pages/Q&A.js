import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import QnA from '../components/QnA'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


//이렇게 페이지를 따로 만들지 말고 스크롤 다운으로 쭉 이어서 가게 할까?
//왜냐면 우리는 사용자에게 보여줘야할 정보가 많지 않으니까?

const QnAPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
  };
  return (
    <>
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle = {toggle}/>
      <QnA />
      <ScrollToTop />
    </>
  )
}

export default QnAPage
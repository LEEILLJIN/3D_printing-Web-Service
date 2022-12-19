import { requiredChakraThemeKeys } from '@chakra-ui/react'
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Video from '../../videos/video.mp4'
import FileDropZone from '../FileDropZone'
import { 
    MainContainer, 
    MainBg, 
    VideoBg,
    MainContent,
    MainH1,
    MainH2,
    MainP,
    MaindropWrapper,
    IMG,
    ImgWrap

   // Dropbtn

} from './MainElements'
//import { Button } from '../ButtonElements'
const PrintingScreen = () => {
    //const APP_KEY = "nw61dqnhbwfxjjc"; //when use react-dropbox-chooser

    // const fileTypes = ["STL", "PNG"];
    // const [file, setFile] = useState(null);//when use react-drag-drop-files
    // const getColor = (props) => {
    //     if (props.isDragAccept) {
    //         return '#00e676';
    //     }
    //     if (props.isDragReject) {
    //         return '#ff1744';
    //     }
    //     if (props.isFocused) {
    //         return '#2196f3';
    //     }
    //     return '#eeeeee';
    //   }
  

    console.log("Published!!!");

    // const handleChange= (file) =>{
    //     setFile(file);
    //     console.log(file);
    // };//when use react-drag-drop-files

  return (
    <MainContainer id='/printstart'>
        <MainBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </MainBg>
        <MainContent>
            <MainH1>
                Tookdak
            </MainH1>
            <MainH2>
                We support your creation.
            </MainH2>
            <ImgWrap>
                <NavLink to="/">
                    <IMG src={require("../../images/logo_3D.png")}></IMG>
                </NavLink>
            </ImgWrap>
        </MainContent>
    </MainContainer>
  )
}

export default PrintingScreen
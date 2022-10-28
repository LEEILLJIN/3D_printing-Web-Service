import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import FileDropZone from '../FileDropZone'
import { 
    MainContainer, 
    MainBg, 
    VideoBg,
    MainContent,
    MainH1,
    MainP,
    MaindropWrapper,

   // Dropbtn

} from './MainElements'
//import { Button } from '../ButtonElements'
const MainSection = () => {
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
    <MainContainer id='home'>
        <MainBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </MainBg>
        <MainContent>
            <MainH1>
                Tookdak
            </MainH1>
            <MainH1>
                Reasonable, Effective, convenient 3D Printing Service
            </MainH1>
            <MaindropWrapper>
                <FileDropZone/>
            </MaindropWrapper>
        </MainContent>
    </MainContainer>
  )
}

export default MainSection
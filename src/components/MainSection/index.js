import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { 
    MainContainer, 
    MainBg, 
    VideoBg,
    MainContent,
    MainH1,
    MainP,
    MainBtnWrapper,
    ArrowForward,
    ArrowRight
} from './MainElements'
const MainSection = () => {
    const [hover, setHover] = useState(false);

    const onHover =() =>{
        setHover(!hover);
    };
  return (
    <MainContainer id='home'>
        <MainBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </MainBg>
        <MainContent>
            <MainH1>
                Tookdak : Reasonable, Effective, convenient 3D Printing Service
            </MainH1>
            <MainP>
                Sign up for a new account and Use 3D Printer for Reasonable Price!
            </MainP>
            <MainBtnWrapper>
                <Button 
                    to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </MainBtnWrapper>
        </MainContent>
    </MainContainer>
  )
}

export default MainSection
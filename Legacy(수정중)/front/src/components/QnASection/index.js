import React from 'react'
import { Button } from '../ButtonElements'
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import { 
    QnAContainer,
    QnAWrapper,
    QnARow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap, 
    Img, 
    ImgWrap 
} from './QnAElements'
import { NavBtnLink } from '../Navbar/NavbarElements';

const QnASection = ({
    lightBg, 
    lightText,
    id, 
    imgStart, 
    topline, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2,

    alt1,
    alt2,
    alt3,
    alt4,
    alt5,
    alt6,
    alt7,
    alt8,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay : true,
        autoplaySpeed : 3000
       
    }
  return (
      <>
        <QnAContainer lightBg={lightBg} id={id}>
            <QnAWrapper>
                <QnARow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                        smooth = {true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                            {buttonLabel}
                                    </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <div>
                            <Slider {...settings}>
                                <ImgWrap>
                                    <Img src={img1} alt={alt1}/>
                                </ImgWrap>
                                <ImgWrap>
                                    <Img src={img2} alt={alt2}/>
                                </ImgWrap>
                                <ImgWrap>
                                    <Img src={img3} alt={alt3}/>
                                </ImgWrap>
                                <ImgWrap>
                                    <Img src={img4} alt={alt4}/>
                                </ImgWrap>
                                <ImgWrap>
                                    <Img src={img5} alt={alt5}/>
                                </ImgWrap>
                                <ImgWrap>
                                    <Img src={img6} alt={alt6}/>
                                </ImgWrap>
                                <ImgWrap>
                                    <Img src={img7} alt={alt7}/>
                                </ImgWrap>
                                <ImgWrap>
                                    <Img src={img8} alt={alt8}/>
                                </ImgWrap>
                            </Slider>
                         </div>
                    </Column2>
                </QnARow>
            </QnAWrapper>
        </QnAContainer>
      </>
  )
}

export default QnASection
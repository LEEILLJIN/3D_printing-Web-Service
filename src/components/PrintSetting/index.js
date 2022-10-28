import React, {useState} from 'react'
import {
    Container,
   PrintingInfo,
   GCodeViewerContainer,
   PaymentBtnContainer,
   Context,
   PrintingInfoMessage,
   Smalltitle,
   Message,
   MessageGroup1,
   MessageGroup2
} from './PrintSettingElements'
import { StlViewer } from 'react-stl-file-viewer'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import { useHistory, withRouter } from 'react-router-dom';
import {GCodeViewer} from "react-gcode-viewer";
import PaymentPlease from "../../pages/payment"

/* 
    stl file 들어오면 출력옵션 3개 
    stl to gcode를 web상에서 코드로 처리해서 gcode preview로 보여줄 수 있게 하는게 best
    -> 안되면 prusa slicer로 gcode를 받아서 web에서 다시 보여줘야함(복잡하고 오래 걸릴 수 있음)    

    ***check out 후에 stl파일을 drop Box나 aws s3에 저장되도록(보안!!!)
        -> 미결재 인원거르기
*/
const PrintSetting = () => {
    const [volume, setvolume] = useState(0)
    function getFrame() {
      let canvas = document.getElementsByTagName('canvas')[0]
      return canvas.toDataURL()
    }
  
const url = "Pikachu_0.24mm_PETG_MK3S_6h26m.gcode"
const style = {
    top: 0,
    left: 0,
    width: '600px',
    height: '600px',
    
}

// const history =useHistory();

// const handlePaymentBtn = () => {
//   history.push('/payment')
// };


  return (
    <>
     <Container>
          {/* <div>
            <Flex flexGrow={1} padding={1}>
                <Box border='1px'>
                <Heading as=<Message' size='md'>
                  {`Volume : ${Math.round(volume) * 0.001}`+" cm3"}
                </Heading>
                <StlViewer
                    width={300}
                    height={300}
                    url= "PikachuThick_tail.stl"
                    groundColor='rgb(128, 128, 128)'
                    objectColor='rgb(255, 100, 0)'
                    skyboxColor='rgb(255, 255, 255)'
                    gridLineColor='rgb(0, 0, 0)'
                    lightColor='rgb(255, 255, 255)'
                    volume={setvolume}
                />
                
                </Box>
            </Flex>
          </div> */}
        <GCodeViewerContainer>
      
            
            <GCodeViewer
                    orbitControls = {true}
                    visible={1}
                    quality = {0.1}
                    showAxes = {true}
                    topLayerColor = {"#b1d6f2"}
                    layerColor={"#019472"}
                    style={style}
                    url={url}
                    
                />
            
        </GCodeViewerContainer>
        <PrintingInfo>
          <PrintingInfoMessage>
            <MessageGroup1>
              <Context>
                <Smalltitle>File</Smalltitle>
                <Message> PikachuThick_tail</Message>
              </Context>
            
              <Context>
                <Smalltitle>Filament Type</Smalltitle>
                <Message> PETG</Message>
              </Context>

              <Context>
                <Smalltitle>Model Volume</Smalltitle>
                <Message> 96.43 cm3</Message>
              </Context>
            </MessageGroup1>
            <MessageGroup2>
              <Context>
                <Smalltitle>Model Weight</Smalltitle>
                <Message> 121.5 g</Message>
              </Context>
              
              <Context>
                <Smalltitle>Model Dimensions</Smalltitle>
                <Message>6.38 X 6.80 X 10.03 cm</Message>
              </Context>

              <Context>
                <Smalltitle>Printing time</Smalltitle>
                <Message> 6h 44m</Message>
              </Context>
              
              <Context>
                <Smalltitle>Total Price</Smalltitle>
                <Message>KRW 6256</Message>
            </Context>
         
            <PaymentBtnContainer>
              <PaymentPlease/>
            </PaymentBtnContainer>

            </MessageGroup2>
          </PrintingInfoMessage>
        </PrintingInfo>
        
    </Container>
    </>
  )
}

export default PrintSetting
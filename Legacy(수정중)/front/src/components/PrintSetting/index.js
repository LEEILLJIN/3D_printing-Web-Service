import React, {useCallback, useEffect, useState} from 'react'
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
import { useHistory, useLocation, withRouter } from 'react-router-dom';
import {GCodeViewer} from "react-gcode-viewer";
import PaymentPlease from "../../pages/payment"

/* 
    stl file 들어오면 출력옵션 3개 
    stl to gcode를 web상에서 코드로 처리해서 gcode preview로 보여줄 수 있게 하는게 best
    -> 안되면 prusa slicer로 gcode를 받아서 web에서 다시 보여줘야함(복잡하고 오래 걸릴 수 있음)    

    ***check out 후에 stl파일을 drop Box나 aws s3에 저장되도록(보안!!!)
        -> 미결재 인원거르기
*/
const PrintSetting = (props) => {
  // const filelist = [
  //   {
  //     filename : Uploadfilename.Uploadfilename.split('.'),
  //     ModelVolume : props.value[volume],
  //     ModelWeight : props.value[weight],
  //     ModelDimensions : 
  //       props.value[x]+"X" + props.value[y] +"X" +  props.value[z]+ "cm",
  //     printingtime : props.value[printingtime],
  //     TotalPrice : props.value[totalprice]
  //   }
  // ]



    const [volume, setvolume] = useState(0)
    function getFrame() {
      let canvas = document.getElementsByTagName('canvas')[0]
      return canvas.toDataURL()
    }

    const location  = useLocation();

    const Uploadfilename = location.state?.Uploadfilename;
    console.log(Uploadfilename.Uploadfilename)

    const str = Uploadfilename.Uploadfilename.split('.')
    console.log(str)

  
    const filenamelist = ["One_Hand_Book_Holder", "PikachuThick_tail", "iPhone_and_iPad_Holder", "fidget_spinner", "Catbus_1"]
    const filelist = [
      {
        filename : "One_Hand_Book_Holder",
        ModelVolume : "7.63 cm3",
        ModelWeight : "9.61 g",
        ModelDimensions : "8.40 X 7.02 X 0.65 cm",
        printingtime : "29m",
        TotalPrice : 2113
      },
      {
        filename : "PikachuThick_tail",
        ModelVolume : "96.43 cm3",
        ModelWeight : "121.50 g",
        ModelDimensions : "6.36 X 6.77 X 10.00 cm",
        printingtime : "5h 29m",
        TotalPrice : 7560
      },
      {
        filename : "iPhone_and_iPad_Holder",
        ModelVolume : "131.10 cm3",
        ModelWeight : "165.19 g",
        ModelDimensions : "10.08 X 10.08 X 6.64 cm",
        printingtime : "7h 32m",
        TotalPrice : 8256
      },
      {
        filename : "fidget_spinner",
        ModelVolume : "21.92 cm3",
        ModelWeight : "27.62 g",
        ModelDimensions : "6.64 X 7.26 X 1.10 cm",
        printingtime : "2h 56m",
        TotalPrice : 3866
      },
      {
        filename : "Catbus_1",
        ModelVolume : "408.14 cm3",
        ModelWeight : "514.26 g",
        ModelDimensions : "15.94 X 15.05 X 10.01 cm",
        printingtime : "19h 14m",
        TotalPrice : 37680
      }
      
      
    ]
    let fileNum = 0
    // const filetest= (temp) =>{
  
    //     setFileInfo(temp)
     
    // };
    let fileinfo = []
    for(let i = 0; i < filenamelist.length; i++) {
      if (str[0] == filenamelist[i]){
        fileNum = i
        fileinfo = [filenamelist[fileNum], filelist[fileNum].TotalPrice]
        break
      }
    }
    // useEffect(() =>{
    //   console.log("DDDDDDDDsdfwefewfewfwe"); 
    //   setFileInfo(temp);
    // },[fileinfo]);
  
    const url = "/static/resource_file/" + str[0] + ".gcode"
    const style = {
        top: 0,
        left: 0,
        width: '600px',
        height: '600px',
        
    }

    var fprop = {
      gridWidth: 2,
      gridHeight: 2
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
                    quality = {0.7}
                    showAxes = {true}
                    layerColor={'#7c7c80'}
                    style={style}
                    url={url}
                    floorProps={fprop}
                    
                />
        </GCodeViewerContainer>
        <PrintingInfo>
          <PrintingInfoMessage>
            <MessageGroup1>
              <Context>
                <Smalltitle>File</Smalltitle>
                <Message> {str[0]}</Message>
              </Context>
            
              <Context>
                <Smalltitle>Filament Type</Smalltitle>
                <Message> PETG</Message>
              </Context>

              <Context>
                <Smalltitle>Model Volume</Smalltitle>
                <Message> {filelist[fileNum].ModelVolume}</Message>
              </Context>
            </MessageGroup1>
            <MessageGroup2>
              <Context>
                <Smalltitle>Model Weight</Smalltitle>
                <Message>  {filelist[fileNum].ModelWeight}</Message>
              </Context>
              
              <Context>
                <Smalltitle>Model Dimensions</Smalltitle>
                <Message>{filelist[fileNum].ModelDimensions}</Message>
              </Context>

              <Context>
                <Smalltitle>Printing time</Smalltitle>
                <Message> {filelist[fileNum].printingtime}</Message>
              </Context>
              
              <Context>
                <Smalltitle>Total Price</Smalltitle>
                <Message>KRW {filelist[fileNum].TotalPrice}</Message>
            </Context>
         
            <PaymentBtnContainer>
              <PaymentPlease value = {fileinfo}/>
            </PaymentBtnContainer>

            </MessageGroup2>
          </PrintingInfoMessage>
        </PrintingInfo>
        
    </Container>
    </>
  )
}

export default PrintSetting
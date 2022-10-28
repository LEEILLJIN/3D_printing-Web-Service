import React, {useEffect, useState} from 'react'

import { StlViewer } from 'react-stl-file-viewer'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'

import {OBJViewer, STLViewer} from 'react-stl-obj-viewer';


import {
    MessageAndCheckboxContainer,
    CheckBoxContainer,
    CheckBoxGroup,
    StateMessageContainer,
    StateMessageGroup,
    StateMessageH1,
    StateMessage1,
    StateMessage2,
    
}from './CheckBoxElements'
import FileDropZone from '../FileDropZone';


const PrintinfoCheckBox = (props) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
 
  const [infill, setinfill] = useState("기본");
  const [detail, setdetail] = useState("기본");

 
  const [volume, setvolume] = useState(0)
    // function getFrame() {
    //   let canvas = document.getElementsByTagName('canvas')[0]
    //   return canvas.toDataURL()
    // }


 
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
    if (checkedOne){
      setinfill("기본")
    }else{
      setinfill("높음")
    }
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    if (checkedTwo){
      setdetail("기본")
    }else{
      setdetail("높음")
    }
  };
  

  const CheckBox = ({label, value, onChange}) => {
    return(
      <label>
        <input 
          type="checkbox" 
          checked = {value} 
          onChange = {onChange}
          
          />
        {label}
      </label>
    )
  }
  
  // const stlfile = props.stlfile
  // console.log("transfer stlfile"+stlfile)
  // console.log(stlfile)
  // console.log(props.stlfile)

  return (
    <>
    <MessageAndCheckboxContainer>
        <StateMessageContainer>
          <StateMessageH1>
            Now:
          </StateMessageH1>
          <StateMessageGroup>
            <StateMessage1>
              채움 - {infill}
            </StateMessage1>
            <StateMessage2>
              세심함 - {detail}
            </StateMessage2>
          </StateMessageGroup>
        </StateMessageContainer>
      <CheckBoxContainer>
          <div>
              <Flex flexGrow={1} padding={1}>
                  <Box border='1px'>
                  <Heading as='h3' size='md'>
                    {`Volume : ${Math.round(volume) * 0.001}`+" cm3"}
                    
                  </Heading>
                  {/* <div>
                    {stlfile ?
                          <STLViewer
                              onSceneRendered={(element) => {
                                  console.log(element)
                              }}
                              sceneClassName="test-scene"
                              file={stlfile}
                              className="obj"
                              modelColor="#FF0000"/> : null

                      }
                    </div> */}

                  <StlViewer
                      width={300}
                      height={300}
                      url= "Pikachu.stl"
                      groundColor='rgb(128, 128, 128)'
                      objectColor='rgb(255, 100, 0)'
                      skyboxColor='rgb(255, 255, 255)'
                      gridLineColor='rgb(0, 0, 0)'
                      lightColor='rgb(255, 255, 255)'
                      volume={setvolume}
                  />
                  
                  </Box>
              </Flex>
            </div>
          <CheckBoxGroup>
            <CheckBox
              label = " 채움을 높음으로"
              value = {checkedOne}
              onChange = {handleChangeOne}
              //해당 checkbox를 체크하면 infill이 높음으로
              />
            <CheckBox
              label = " 세심함을 높음으로  "
              value = {checkedTwo}
              onChange = {handleChangeTwo}
              //해당 checkbox를 체크하면 prusa mini로 프린팅된다.
              //해당 checkbox는 stl file volum체크를 통해 일정 volum이상이면 체크할 수 없게 막아놔야한다.
              />
          </CheckBoxGroup>
      </CheckBoxContainer>
    </MessageAndCheckboxContainer>
    </>
  );
};

export default PrintinfoCheckBox
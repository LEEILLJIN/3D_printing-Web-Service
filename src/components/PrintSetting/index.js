import React from 'react'
import {
    Container,
    Icon,
    FormWrap 
} from './PrintSettingElements'
/* 
    stl file 들어오면 출력옵션 3개 
    stl to gcode를 web상에서 코드로 처리해서 gcode preview로 보여줄 수 있게 하는게 best
    -> 안되면 prusa slicer로 gcode를 받아서 web에서 다시 보여줘야함(복잡하고 오래 걸릴 수 있음)    

    ***check out 후에 stl파일을 drop Box나 aws s3에 저장되도록(보안!!!)
        -> 미결재 인원거르기
*/
const PrintSetting = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to="/">Tookdak</Icon>
                
            </FormWrap>
        </Container>
    </>
  )
}

export default PrintSetting
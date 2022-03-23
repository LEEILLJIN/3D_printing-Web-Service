import React, {useEffect, useState} from 'react'

import none from '../FileDropZone/index'

import {
    MessageAndCheckboxContainer,
    CheckBoxContainer,
    CheckBoxGroup,
    StateMessageContainer,
    StateMessageGroup,
    StateMessageH1,
    StateMessage1,
    StateMessage2,
    StlVolumeContainer,
    StlVolumeInfo
}from './CheckBoxElements'

const PrintinfoCheckBox = () => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);


  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
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
  console.log(none);


  return (
    <>
    <MessageAndCheckboxContainer>
      <StateMessageContainer>
        <StateMessageH1>
          Now:{none}
        </StateMessageH1>
        <StateMessageGroup>
          <StateMessage1>
            채움 - 기본
          </StateMessage1>
          <StateMessage2>
            세심함 - 기본
          </StateMessage2>
        </StateMessageGroup>
      </StateMessageContainer>
      <StlVolumeContainer>
        <StlVolumeInfo>
          STL VOLUME : 
        </StlVolumeInfo>
      </StlVolumeContainer>
      <CheckBoxContainer>
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
import React, {useEffect, useState} from 'react'

import {
    CheckBoxContainer,
    CheckBoxGrounp
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


  return (
    <CheckBoxContainer>
      <CheckBoxGrounp>
        <CheckBox
          label = " Value 1"
          value = {checkedOne}
          onChange = {handleChangeOne}
          />
        <CheckBox
          label = " Value 2"
          value = {checkedTwo}
          onChange = {handleChangeTwo}
          />
          <CheckBox
          label = " Value 3"
          value = {checkedThree}
          onChange = {handleChangeThree}
          />
        </CheckBoxGrounp>
        <CheckBoxGrounp>
        <CheckBox
          label = " Value 1"
          value = {checkedOne}
          onChange = {handleChangeOne}
          />
        <CheckBox
          label = " Value 2"
          value = {checkedTwo}
          onChange = {handleChangeTwo}
          />
          <CheckBox
          label = " Value 3"
          value = {checkedThree}
          onChange = {handleChangeThree}
          />
        </CheckBoxGrounp>
    </CheckBoxContainer>
  );
};

export default PrintinfoCheckBox
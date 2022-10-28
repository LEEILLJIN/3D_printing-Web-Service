import styled from "styled-components";
import { Link } from 'react-router-dom';
import {Link as LinkR} from 'react-router-dom'

export const Container = styled.div`
    background: #c9c7c7;
    display: flex;
    justify-content : center;
    align-items : center;
    padding : 0 30px;
    height : 990px;
    position : relative;
    z-index : 1;

    @media screen and (max-width : 768px){
        flex-direction: column;
        height: fit-content;
    }
    /* min-height : 692;
    position : fixed;
    bottom : 0;
    left : 0;
    right : 0;
    top : 0;
    z-index : 0;
    overflow : hidden;
    background : linear-gradient(
        108deg,
        orange 40%,
        #fff 100%
    ); */
`
export const FormWrap = styled.div`
    /* height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;

    @media screen and (max-width : 480px){
        height : 80px;
    } */
`
export const PrintingInfo = styled.div`
    height: 550px;
    margin-left: 15%;
`
export const PrintingInfoMessage= styled.div`
    margin-bottom: 5%;
    display: flex;
    height: 600px;
    flex-direction: column;
    white-space: nowrap;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width : 768px){
        width: 750px;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: baseline;
    }

    
`
export const MessageGroup1 = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    
`
export const MessageGroup2 = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 400px;
`
export const Context = styled.div`
    
`
export const Smalltitle = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Message = styled.h4`
    margin-left: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const GCodeViewerContainer = styled.div`
    background: #d9d7d4 ;
    @media screen and (max-width : 768px){

        margin-top: 100px;
    }

`
export const PaymentBtnContainer = styled.div`
  
`

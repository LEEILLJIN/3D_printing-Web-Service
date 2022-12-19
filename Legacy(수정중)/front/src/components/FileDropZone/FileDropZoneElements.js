import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const FileDropContainer = styled.section`
    margin-top: 5%;
    height: 450px;
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     @media screen and (min-width : 768px){
        width: 900px;
        height: 600px;
     }

    @media screen and (max-width : 480px){
        width: 480px;
        height: 400px;
    }
`
export const FileDropWrapper = styled.div`
    flex: 1;
    font-size: 20px;
    height: 450px;
    width: 650px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 4px;
    border-radius: 4px;
    color: ${(props)=> props.borderColor? 'orange' : '#fff'};
    border-style: dashed;
    background : transparent;
    outline: none;
    transition: border .24s ease-in-out;

    &:hover{
        color: orange;
        cursor: pointer;
        transition : all 0.2s ease-in-out;

    }

    @media screen and (min-width : 768px){
        width: 700px;
        height: 450px;
    }

    @media screen and (max-width : 768px){
        width: 600px;   
        height: 450px;
     }




`

export const FileDropInput = styled.input`

`
export const FileDropDecription1 = styled.p`
    color : red;
`
export const FileDropDecription2 = styled.p`

`

export const FileList = styled.aside`

`

export const FileListH4 = styled.h4`

`

export const FileListDetail = styled.ul`

`
export const TumbContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
`

export const Thumb = styled.div`
    display : inline-flex;
    border: none;
    margin-bottom: 8px;
    margin-right: 8px;
    width: 100px;
    height: 100px;
    padding: 4px;
    box-sizing: border-box;
`

export const ThumbInner = styled.div`
    display: flex;
    overflow: hidden;
    min-width: 0;

`
export const IMG = styled.img`
    display: block;
    width: auto;
    height: 100%;
`
export const FileBtn = styled.nav`
    display : flex;
    justify-content: right;

    /* @media screen and (max-width: 768px){
        display : none;
    } */
`
export const FileBtnLink = styled(LinkR)`
    border-radius : 50px;
    background: orange;
    white-space : nowarp;
    padding: 10px 22px;
    color : #010606;
    font-size : 16px;
    outline : none;
    border : none;
    cursor : pointer;
    transition: all 0.2s ease-in-out;
    text-decoration : none;
    &:hover{
        transition : all 0.2s ease-in-out;
        background : #fff;
        color : #010606;
    }
`

export const AcceptedFileItems = styled.ul`

`

export const FileRejectionItems = styled.ul`
`

export const Filecheck = styled.div`
`

export const ModalContainer = styled.div`


`
export const FileInput = styled.input`
    display: none;

`
export const modalstyle = styled.div`
    background-color : red;
    color : red;
`

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;


`

export const CloseModalBtn = styled.button`
    margin-right: 3%;
    border-radius : 50px;
    background:  orange;
    white-space : nowrap;
    padding : ${({big}) => (big? '14px 48px' : '12px 30px')};
    color : #010606;
    font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline : none;
    border : none;
    cursor : pointer;;
    align-items : center;
    transition : all 0.2s ease-in-out;
    width : 100px;
    height : 50px;

    &:hover{
        transition : all 0.2s ease-in-out;
        background: #fff;
    }
`
export const ModalBtnLink = styled(LinkR)`
    display: flex;
    border-radius : 50px;
    background: orange;
    white-space : nowrap;
    padding: 10px 22px;
    color : #010606;
    font-size : 16px;
    outline : none;
    border : none;
    cursor : pointer;
    align-items : center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    text-decoration : none;
    width : 100px;
    height : 50px;


    &:hover{
        transition : all 0.2s ease-in-out;
        background : #fff;
        color : #010606;
    }
 `
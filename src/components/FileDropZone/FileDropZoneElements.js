import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const FileDropContainer = styled.section`
    height: auto;
    width: auto;
     @media screen and (max-width : 768px){
        height: auto;
        width: 700px;   
     }

    @media screen and (max-width : 480px){
        height: auto;
        width: auto;
    }
`
export const FileDropWrapper = styled.div`
    flex: 1;
    font-size: 20px;
    height: 500px;
    width: 700px;
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

export const Filecheck = styled.aside`
`

export const ModalContainer = styled.div`


`

export const CloseModalBtn = styled.button`
     border-radius : 50px;
    background: ${({primary})=> (primary ? 'orange' : '#010606')};
    white-space : nowrap;
    padding : ${({big}) => (big? '14px 48px' : '12px 30px')};
    color : ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline : none;
    border : none;
    cursor : pointer;
    display : flex;
    justify-content: center;
    align-items:center;
    margin-top: 53%;
    transition : all 0.2s ease-in-out;
    width : 100px;
    height : 60px;

    &:hover{
        transition : all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`
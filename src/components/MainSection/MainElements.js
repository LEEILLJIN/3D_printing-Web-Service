import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

export const MainContainer = styled.div`
    background: #000;
    display: flex;
    justify-content : center;
    align-items : center;
    padding : 0 30px;
    height : 972px;
    position : relative;
    z-index : 1;
`
//Add : before styles
/*:before{
    content: '';
    position : absolute;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : linear-gradient(180deg, rgba(0,0,0,2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0% transparent 100%);
    z-index : 2;
}*/

export const MainBg = styled.div`
    position : absolute;
    top : 0;
    right : 0;
    left : 0;
    bottom : 0;
    width : 100%;
    height : 100%;
    overflow : hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height : 100%;
    //-o-object-fit : cover;
    object-fit : fill;
    background : #232a34;
    z-index: -3;

`

export const MainContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position : absolute;
    padding : 8px 24px;
    display : flex;
    flex-direction : column;
    align-items : center;

`

export const MainH1 = styled.div`
    color : #000;
    font-size : 48px;
    text-align: center;

    @media screen and (max-width : 768px){
        font-size: 40px;
    }

    @media screen and (max-width : 480px){
        font-size : 32px;
    }
`

export const MainP = styled.p`
    margin-top : 24px;
    color : #000;
    font-size : 24px;
    text-align: center;
    max-width : 600px;

    @media screen and (max-width : 768px){
        font-size: 24px;
    }

    @media screen and (max-width : 480px){
        font-size : 18px;
    }
`

export const MaindropWrapper = styled.div`
    font-family: sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;

    /* margin-top : 32px;
    display : flex;
    flex-direction : column;
    align-items: center; */
`


export const ArrowForward = styled(MdArrowForward)`
    margin-left : 8px;
    font-size : 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left : 8px;
    font-size : 20px;
`

/* export const FileDropZone =styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
`

export const FileInput = styled.input`
` */
/* export const Label = styled.label`
   
`
export const Filename = styled.p`
    width: 350px;
    box-sizing: border-box;
` when use react-drag-drop-files*/ 
/* export const Dropbtn = styled.div`
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
    justify-content : center;
    align-items : center;
    transition : all 0.2s ease-in-out;

    &:hover{
        transition : all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
` when use react-dropbox-chooser*/

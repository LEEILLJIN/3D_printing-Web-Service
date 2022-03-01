import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height : 692;
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
    );
`
export const FormWrap = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;

    @media screen and (max-width : 480px){
        height : 80px;
    }
`
export const Icon = styled(Link)`
    margin-left : 32px;
    margin-top : 32px;
    text-decoration : none;
    color : #fff;
    font-weight : 700;
    font-size : 32px;

    @media screen and (max-width : 480px){
        margin-left : 16px;
        margin-top : 8px;
    }
`


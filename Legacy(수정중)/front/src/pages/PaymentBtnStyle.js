import styled from "styled-components";

export const PaymentBtn = styled.button`
    margin-top: 5%;
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    &:hover{
        transition : all 0.2s ease-in-out;
        background : #fff;
        color : #010606;
    }
`
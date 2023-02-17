import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "@fontsource/poppins/700.css";


export const GlobalStyle = createGlobalStyle`
    body{
        background-color: #222831;
        overflow-x:hidden;
        overflow-y:hidden; 
    }
    *{
        padding: 0;
        margin: 0;
    }

`
export const Section = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    /* overflow-x:scroll; */
    height: 100vh;
    /* border: 2px solid white; */

`
export const Title = styled.h1`
        font-family: "Poppins";
        /* font-weight: 900; */
        font-size: ${props => props.theme.font_size};
        line-height: 1em;
        margin-left: ${props => props.theme.margin_left};
        
        color: ${props => props.theme.color};
        @media screen {
            /* @media (max-width:1000px){
                font-size:3.5em;
            }    */
            @media (max-width:430px){
                font-size:2.5em;
            }   
        }


`
export const BackgroundModal = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 100000;
    background-color:rgb(0, 0, 0,0.8);
    
    
`

export const ModalFooter = styled.div`
    width: 100%;
    height: ${props =>props.theme.height};
    border-top: 2px solid #00ADB5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonModal = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius:15px;
    border:transparent;
    cursor: pointer;
    font-family: "Poppins";
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    color: white;
    background-color:${props => props.theme.bgColor};
    

`
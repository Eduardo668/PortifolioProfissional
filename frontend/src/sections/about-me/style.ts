import styled from "styled-components"
import "@fontsource/poppins/300.css";
export const AboutMeContainer = styled.div`
    width: 100%;
    height: 84%;
    /* border: 2px solid red; */
    display: flex;
    align-items: flex-end;
    @media screen {
        @media (max-width:700px){
            flex-wrap: wrap;
        }   
    }

`

export const BoxAboutMe = styled.div`
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    display: flex;
    /* border: 2px solid yellow; */
    justify-content: center;
    align-items: ${props => props.theme.align};   
    flex-direction:${props =>props.theme.direction};
    
    @media screen {
        @media (max-width:700px){
            width: 100%;
            height: 50%;
        }   
    }

    .img-about-me{
        @media (max-width:1100px){
            width:500px;
        }
        @media (max-width:450px){
            width:300px;
        }
    }
    
    
    .div-titles{
        display: flex;
        width: 80%;
        height: 20%;
        justify-content: flex-start;
        @media (max-width:700px){
            justify-content: center;
        }
        /* border: 2px solid white; */
    }
    .div-paragraph{
        width:80%;
        display: flex;
        justify-content: flex-start;
        height: 80%;
        /* border: 2px solid green; */
        @media (max-width:700px){
            width: 80%;
            align-items: center;
            height: 100%;
        }
        .paragraph{
            color:white;
            display: flex;
            justify-content: flex-end;
            font-family:"Poppins";
            font-size: 1.17em;
            @media (max-width:500px){
                font-size: 1em;
            }
            
        }
        
    }
`
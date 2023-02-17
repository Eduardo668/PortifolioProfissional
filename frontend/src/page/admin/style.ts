import styled from "styled-components";
import bgImage from "../../assets/background.svg"

export const PageContainer = styled.div`
    width: 100%;
    overflow-y:hidden;
    overflow-x:hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:url(${bgImage});
    .div-admin-title{
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`
export const Container = styled.div`
    width: 100%;
    overflow-x:hidden;
    height: 80%;
    border-top: 4px solid #00ADB5;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction:column;
    background-color:#222222;
    border-radius:20px 20px 0px 0px;
    /* flex-wrap:wrap; */

`
export const Box = styled.div`
    width: 100%;
    overflow-y:${props => props.theme.scroll_y};
    overflow-x:hidden;
    height: ${props => props.theme.height};
    display: flex;
    /* border: 2px solid white; */
    justify-content: flex-start;
    align-items: center;
    flex-direction:${props => props.theme.direction};
    .div-title{
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        
    }
    .div-btns{
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        
    }
    .btn-add{
        border:transparent;
        width: 190px;
        height: 40px;
        margin: 10px;
        border-radius:20px;
        cursor: pointer;
        background-color:#00ADB5;
        color:white;
        font-family: "Poppins";
        font-size: 0.7em;
        font-weight:700;
        font-style: normal;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        @media (max-width:620px){
            width: 140px;
        }
        @media (max-width:465px){
            width: 100px;
            font-size:0.6em;
        }
        
    }


`

export const ProjectList = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 1em;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    /* border:2px solid white;   y */
`


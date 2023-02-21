import styled from "styled-components";
import "@fontsource/poppins/600.css";

export const Card = styled.div`
    width: 300px;
    height: 370px;
    flex-direction: column;
    /* border: 2px solid red; */
    background: rgba(57, 62, 70, 0.5);
    margin-left: 3em;
    display: flex;
    border-radius: 16px;
    backdrop-filter: blur(2px);
    align-items: center;
    justify-content: flex-end;
    .div-image{
        width: 250px;
        height: 45%;
        /* border: 1px solid white; */
        /* display: flex;
        justify-content: center;
        align-items: center; */
        .project-img{
            width: 250px;
            height: 100%;
            object-fit:cover;
        }
    }
    .div-card-title{
        width: 100%;
        height: 10%;
        display: flex;
        /* border: 2px solid red; */
        justify-content: center;
        align-items: center;
        .title{
            color: white;
            font-family:"Poppins";
            font-size: 1.2em;
            font-weight: 600;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

        }
    }

    .div-tags{
        width: 100%;
        height: 18%;
        display: flex;
        flex-wrap:wrap;
        /* border: 2px solid yellow; */
        justify-content: center;
    }

    .div-buttons{
        /* border: 2px solid red;yastr   */
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20%;
    }

`
export const BtnCard = styled.button`
    width: 100px;
    height: 50px;
    margin:20px;
    border-radius:20px;
    border: transparent;
    background-color:${props => props.theme.bgColor};
    display: flex;
    color: white;
    font-family:"Poppins";
    font-weight: 600;
    justify-content:center;
    align-items: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    /* border: 2px solid white; */
    cursor: pointer;
    :hover{
        background-color: ${props => props.theme.bgHover};
        transition:0.5s;
        
    }
    
    h4{
        margin:10px;
    }

`

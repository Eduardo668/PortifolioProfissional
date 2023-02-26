import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    height: 84%;
    /* border: 2px solid red; */
    overflow-x:hidden;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
  
    
    .div-title{
        width: 100%;
        height: 20%;
        display: flex;
        /* border: 2px solid yellow; */
        justify-content: center;
        align-items: center;
        @media (max-width:600px){
            height: 10%;
        }
       
    }

    .div-card{
        width: 80%;
        height: 80%;
        display: flex;
        /* border: 2px solid cyan; */
        justify-content: flex-start;
        align-items: center;
        overflow-x:scroll;
        overflow-y:hidden;
        @media (max-width: 1320px){
            width: 84%;
        }
        @media (max-width: 1260px){
            width: 88%;
        }
        @media (max-width: 1200px){
            width: 100%;
            
        }
        @media (max-width:600px){
            height: 70%;
        }
    }
    .cards{
        width: auto;
        height: 100%;
        display: flex;
        justify-content: center;
        /* border: 2px solid red; */
        align-items: center;
    }

`


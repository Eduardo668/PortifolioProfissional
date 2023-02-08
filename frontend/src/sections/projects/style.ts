import styled from "styled-components";
import bgImage from "../../assets/background.svg" 

export const ProjectsContainer = styled.div`
    width: 100%;
    height: 84%;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    background:url(${bgImage});
    .div-title{
        width: 95%;
        height: 20%;
        display: flex;
        padding-left:1.5em;
        /* border:2px solid red; */
        justify-content: flex-start;
        align-items:center;
    }
    .div-filter{
        width: 95%;
        height: 5%;
        /* border: 2px solid yellow; */
        display:flex;
        justify-content: flex-start;
        align-items: center;
        padding-left:1em;
        
    }

`
export const ProjectsBox  = styled.div`
    width: 100%;
    height: 100%;
    /* border: 2px solid white; */
    display: flex;
    align-items: flex-end;
  
    /* border: 2px solid cyan; */
    
    overflow-x: scroll;
    .div-cards{
        width: auto;
        height: 100%;
        /* border: 2px solid white; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-right:2.5em;
    }
   


`
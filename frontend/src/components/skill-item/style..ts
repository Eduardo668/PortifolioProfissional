import styled from "styled-components";
import "@fontsource/poppins/600.css";

export const SkiilItemContainer = styled.div`
     width: 7rem;
     height: 7rem;
     display: flex;
     flex-direction:column;
     align-items: center;
     justify-content: center;
     /* border: 2px solid white; */
     margin: 2rem;

     @media (max-width:880px){
         width: 5em;
         height: 5em;
     }
     @media (max-width:540px){
         width: 3em;
         height: 3em;
         margin: 1rem;
     }


     .skill-name{
        font-family:"Poppins";
        color:white;
        font-weight:600;
        @media (max-width:540px){
            font-size:0.9em;
         }
     }
     .img-skill{
        width: 5rem;
        @media (max-width:540px){
         width: 2em;
        
      }
     }
`
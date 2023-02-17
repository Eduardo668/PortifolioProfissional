import styled from "styled-components";

export const ModalContainer = styled.div`
    width:300px;
    height: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid #00ADB5;
    background-color: #393e46;
    border-radius: 10px;
    flex-direction: column;
    .div-paragraph{
        width: 100%;
        /* border: 2px solid red; */
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .title{
            color: white;
            font-family: "Poppins";
            font-size: 1em;
        }
    }
`
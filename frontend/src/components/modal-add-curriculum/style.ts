import styled from "styled-components";

export const ModalContainer = styled.div`
    width:330px;
    height: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid #00ADB5;
    background-color: #393e46;
    border-radius: 10px;
    flex-direction: column;
    .div-title{
        width: 100%;
        height: 20%;
        /* border: 2px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        .modal-title{
            font-family: "Poppins";
            color: white;
            font-size:1.2em;
        }
    }
    .div-input-file{
        width: 90%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px solid yellow; */
        .input-file{
            border: 2px solid #00ADB5;
            padding: 10px;
            border-radius: 10px;
            color: white;
            font-family: "Poppins";
            background-color: #222222;

        }
    }
    .modal-footer{
        width: 100%;
        height:30%;
        display: flex;
        border: 2px solid purple;
    }

`
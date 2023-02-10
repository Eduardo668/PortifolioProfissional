import styled from "styled-components";
import bgImage from "../../assets/background.svg"

export const PageContainer = styled.div`
    width: 100%;
    overflow-y:auto;
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
    height: 80%;
    border: 2px solid red;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* flex-wrap:wrap; */

`
export const Box = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid white;
    display: flex;
    flex-direction:column;
    align-items: center;
    
    .div-form-title{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid red;
    }
    .div-form{
        width: 100%;
        height: auto;
        border: 2px solid yellow;
        display: flex;
        /* flex-direction: column; */
        align-items: flex-start;
        justify-content: center;
        flex-wrap:wrap;
        
    }
    .input-div{
        width: auto;
        height: 6em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 2px solid cyan;
    }

`

export const InputText = styled.input`
    width: 150px;
    height: 20px;
    color: white;
    font-family:"Poppins";
    padding:8px;
    outline: none;
    border-radius:15px;
    background-color:  #222222 ;
    border: 2px solid #00ADB5;

`
export const Label = styled.label`
    color: white;
    font-family:"Poppins";
    align-self:flex-start;
    margin-bottom:5px;

`
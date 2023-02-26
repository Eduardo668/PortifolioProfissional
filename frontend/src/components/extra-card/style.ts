import styled from "styled-components";


export const Card = styled.div`
    width: 300px;
    height: 350px;
    border: 2px solid #00ADB5;
    border-radius: 10px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    @media (max-width:600px){
        margin: 20px;
    }
   
    
    .title-div{
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #00ADB5;
       
    }

    .div-paragraph{
        width: 100%;
        height:50%;
        /* border: 2px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            color:white;
            font-family: "Poppins";
            width:80%;         
        }
    }
    .div-btn{
        width: 100%;
        height: 30%;
        /* border: 2px solid cyan; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* flex-direction:column; */
        button{
            padding: 10px;
            color: white;
            background-color: #00ADB5;
            border: transparent;
            font-family: "Poppins";
            border-radius: 10px;
            display: flex;
            align-items: center;
            margin: 5px;
            cursor: pointer;
            h4{
                margin-right: 10px;
            }
        }
    }

`
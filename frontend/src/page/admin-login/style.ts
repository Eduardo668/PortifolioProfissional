import styled from "styled-components";
import bgImage from "../../assets/background.svg"
export const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    /* border: 2px solid white; */
    display: flex;
    background:url(${bgImage});
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    width: 300px;
    height: 450px;
    border: 2px solid #00ADB5;
    border-radius:20px;
    background-color:#222222;
    display: flex;
    flex-direction: column;

    .div-title{
        width: 100%;
        height: 30%;
        /* border: 2px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div-form{
        width: 100%;
        height:70%;
        /* border: 2px solid yellow; */
        display: flex;
        flex-direction: column;
        align-items: center;
        .input-div{
            width: 70%;
            height: auto;
            /* border: 2px solid cyan; */
            display: flex;
            flex-direction:column;
            margin: 10px;
            label{
                font-family: "Poppins";
                color: white;
            }
            span{
                color:#00ADB5;
                font-family: "Poppins";
                font-size: 0.7em;
            }
            .input-text{
                border: 2px solid #00ADB5;
                background-color: #393e46;
                padding: 10px;
                border-radius:10px;
                color: white;
                font-family: "Poppins";
                outline: none;
            }

        }
        .btn-div{
            width: 100%;
            height: 60%;
            /* border: 2px solid purple; */
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                width: 200px;
                height: 60px;
                color: white;
                font-family:"Poppins";
                background-color:#00ADB5;
                font-size: 1.5em;
                border-radius:20px;
                border: transparent;
                cursor: pointer;
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
                :hover{
                    background-color:  #0170cd;
                    transition: 0.5s;
                }
            }
        }
    }
`
import styled from "styled-components";



export const ModalContainer = styled.div`
    width: 400px;
    height: 500px;
    border: 2px solid #00ADB5;
    background-color:#393e46;
    border-radius:20px;
    .div-title{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20%;
        border-bottom: 2px solid #00ADB5;
    }
    .div-form{
        width: 100%;
        height: 65%;
        overflow-y:scroll;
        display: flex;
        /* border: 1px solid yellow; */
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        .input-text-label{
             font-family: "Poppins";
            color: white;
        }
        .input-div{
            width: 80%;
            height: auto;
            /* border: 2px solid cyan; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin: 10px;
            .btn-add{
                width:310px;
                height: 30px;
                border-radius:10px;
                margin-top:10px;
                color: white;
                background-color:#00ADB5;
                border: transparent;
                font-family:"Poppins";
                cursor: pointer;
            }
            .input-type{
                background-color: #222222;
                border: 2px solid #00ADB5;
                border-radius:10px;
                width: 250px;
                color:white;
                font-family: "Poppins";
                padding-left:10px;
                cursor: pointer;
            }
            .added-tags-div{
                width: 300px;
                background-color:#222222;
                border: 2px solid #00ADB5;
                margin-top: 10px;
                height: 150px;
                border-radius:10px;
                display: flex;
                justify-content: space-evenly;
                align-items: flex-start;
                padding:10px;
                flex-wrap: wrap;

            }
            .input-image{
                border: 2px solid #00ADB5;
                border-radius: 10px;
                padding:10px;
                color: white;
                font-family: "Poppins";
                background-color:#222222;
                margin-bottom:10px;
            }
            .image-div{
                width: 300px;
                height: 200px;
                border: 2px solid #00ADB5;
                border-radius:10px;
                img{
                    width: 300px;
                    height: 200px;
                    object-fit: cover;
                    border-radius:7px;
                    

                }
                
            }
    }
    
}
    
`

export const InputText = styled.input`
    width: 300px;
    height: 30px;
    border: 2px solid #00ADB5;
    background-color: #222222;
    border-radius:10px;
    outline: none;
    color: white;
    font-family: "Poppins";
    padding-left:10px;
`


import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 400px;
    height: 320px;
    border: 2px solid #00ADB5;
    display: flex;   
    background-color:rgba(57, 62, 70, 0.5);
    border-radius:20px;  
    margin-bottom:20px;
    
    justify-content: flex-start;
    align-items:center;
    flex-direction:column;
    @media screen {
        @media (max-width:800px){
            width: 600px;
        }   
    }

    .div-image{
        width: 250px;
        height: 50%;
        /* border:2px solid white; */
        /* display: flex;
        justify-content:center;
        align-items: center; */
        .img-project{
            /* max-width:100%;
            max-height:100%; */
            width: 250px;
            height: 100%;
            object-fit: cover;
            border-radius: 0px 0px 10px 10px;
       
            
        }
    }

    .div-item-title{
        height: auto;
        padding-top:10px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px solid red; */

        .project-title{
            font-family: "Poppins";
            color: white;
            font-size: 1.2em;
        }

    }

    .div-tags{
        width: 100%;
        height: 20%;
        /* border:2px solid yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .btns-div{
        width: 100%;
        height: 15%;
        /* border:2px solid red; */
        display: flex ;
        justify-content: center;
        align-items: center;

        .btn-edit{
            display: flex;
            justify-content: center;
            align-items:center;
            width: 100px;
            height: 40px;
            margin: 10px;
            border: transparent;
            color: white;
            font-family: "Poppins";
            background-color:#00ADB5;
            border-radius:10px;
            cursor:pointer;
                
        }
        .btn-delete{
            display: flex;
            justify-content: center;
            align-items:center;
            width: 100px;
            height: 40px;
            margin: 10px;
            cursor:pointer;
            border: transparent;
            color: white;
            font-family: "Poppins";
            background-color:#520c03;
            border-radius:10px;
        }
        .btn-icon{
            margin-right: 5px;
        }
        h4{
            margin-left: 5px;
        }

    }

`


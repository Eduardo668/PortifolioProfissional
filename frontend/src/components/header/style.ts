import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    background-color:#222831 ;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
    border-bottom: 2px solid rgba(238, 238, 238, 0.1);
    position: fixed;

    .div-title{
        width: 15rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 2px solid red; */
        height: 100%;
        .title{
            color: white;
            font-family: "Poppins";
            @media (max-width:500px){
                font-size:0.8em;
            }
        }
    }
    .nav-bar{
        width: 30rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height:100%;
        /* border: 2px solid red; */
        .item{
            background-color: transparent;
            border: transparent;
            color: white;
            cursor: pointer;
            font-family:"Poppins";
            @media (max-width:500px){
                font-size:0.8em;
            }
            :hover{
                color:gray;
                transition: 1s;
            }
        }
    }

`
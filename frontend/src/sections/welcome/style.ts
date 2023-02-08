import styled from "styled-components";

export const WelcomeContainer = styled.div`
    width: 100%;
    display: flex;
    height: 84%;
    /* border: solid 2px red; */
    @media screen {
        @media (max-width:700px){
            flex-wrap:wrap;
    
        }   
    }

`
export const BoxWelcome = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.theme.direction};
    align-items: ${props => props.theme.align};
    /* border: 2px solid yellow; */
    @media screen {
        @media (max-width:700px){
            height: 50%;
    
        }   
    }

    .scroll-btn-div{
        width: 100%;
        height:5rem;
        display: flex;
        justify-content: flex-end;
        @media screen {
            @media (max-width: 1000px){
                justify-content: center;
                
            }
        }
        /* border: 2px solid red; */
        .scroll-btn{
            background-color: #393E46;
            width: 96px;
            height: 96px;
            cursor: pointer;
            border: transparent;
            @media screen {
            @media (max-width: 1000px){
                width: 76px;
                height: 76px;
                margin-top:20px;
                
            }
        }
        }
    }

    .img-welcome{
        @media screen {
            @media (max-width:950px){
                width: 400px;
            }   
            @media (max-width:650px){
                width: 250px;
            }   
        }
        
    }

    .btn-div{
        /* border: 2px solid cyan; */
        width: 24rem;
        margin-top:20px;
        /* display: flex; */
        @media screen {
            @media (max-width:1000px){
                display: flex;
                justify-content: center;
            }   
        }
        .btn-download{
            background-color: #393E46;
            border: transparent;
            font-family:"Poppins";
            color: #EEEEEE;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
            width: 210px;
            height: 50px;
            cursor:pointer;
            border-radius: 20px;
            font-weight: 700;
            display: flex;
            flex-direction:row;
            justify-content: space-evenly;
            align-items: center;
            :hover{
                background-color: gray;
                transition:0.5s;
            }
        }

    }

`

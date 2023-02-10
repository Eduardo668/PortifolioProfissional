import React from "react";
import { ButtonStyles } from "./style";
import Arrow from "../../assets/Seta.svg"
type Props = {
    scrollFunction:()=>void
}

export default function ButtonScroll({scrollFunction}:Props){

    return(
        <ButtonStyles>
             <button onClick={scrollFunction} className="scroll-btn" >
                  <img src={Arrow} alt="" />
              </button>
        </ButtonStyles>
    )

}
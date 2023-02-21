import React, { useState } from "react";
import { FilterButton } from "./style";

type Props = {
    name:string,
    setType:()=>void,
    bg_color:string

}

export default function Filter({name, setType, bg_color}:Props){

    return(
        <FilterButton theme={{bgColor:bg_color}}
         onClick={setType} >
            {name}
        </FilterButton>
    )
}
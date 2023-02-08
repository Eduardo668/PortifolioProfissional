import React from "react";
import { FilterButton } from "./style";

type Props = {
    name:string
}

export default function Filter({name}:Props){
    return(
        <FilterButton>
            {name}
        </FilterButton>
    )
}
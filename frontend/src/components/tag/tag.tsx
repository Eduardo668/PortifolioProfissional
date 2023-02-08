import React from "react";
import { TagCard } from "./style";


type Props = {
    name:string
}

export default function Tag({name}:Props){
    return (
        <TagCard>
            {name}
        </TagCard>
    )


}
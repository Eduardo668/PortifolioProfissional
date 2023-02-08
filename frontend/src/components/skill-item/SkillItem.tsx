import React from "react";
import { SkiilItemContainer } from "./style.";


type Props = {
    image:any,
    title:string
}

export default function SkillItem({title, image}:Props){

    return (
        <SkiilItemContainer>
                <img className="img-skill" src={image} alt="" />
                <h3 className="skill-name" >{title}</h3>
        </SkiilItemContainer>
    )


}
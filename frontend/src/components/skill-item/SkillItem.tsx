import React from "react";
import { useEffect } from "react";
import { SkiilItemContainer } from "./style.";
import AOS from "aos";

type Props = {
    image:any,
    title:string
}

export default function SkillItem({title, image}:Props){

    useEffect(() => {
        AOS.init({
          duration: 1500,
        });
      }, []);


    return (
        <SkiilItemContainer data-aos="fade-right" >
                <img className="img-skill" src={image} alt="" />
                <h3 className="skill-name" >{title}</h3>
        </SkiilItemContainer>
    )


}
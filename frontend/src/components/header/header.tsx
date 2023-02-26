import React from "react";
import { HeaderContainer } from "./style";
import {
  scrollToAboutMe,
  scrollToHome,
  scrollToSkills,
  scrollToProjects,
  scrollToContact
} from "../../functions/ScrollFuntions";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <div className="div-title">
          <h3 className="title">Portifolio</h3>
        </div>
        <div className="nav-bar">
          <button onClick={scrollToHome} className="item">
            Home
          </button>
          <button onClick={scrollToAboutMe} className="item">
            About me
          </button>
          <button onClick={scrollToSkills} className="item">
            Skills
          </button>
          <button onClick={scrollToProjects} className="item">Projects</button>
          <button onClick={scrollToContact} className="item">Extra</button>
        </div>
      </HeaderContainer>
    </>
  );
}

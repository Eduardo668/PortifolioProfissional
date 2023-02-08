import React from "react"
import Header from "./components/header/header"
import AboutMe from "./sections/about-me/AboutMe"
import Projects from "./sections/projects/projects"
import Skills from "./sections/technologies/Skills"
import Welcome from "./sections/welcome/welcome"

export default function App(){
    return (
        <>
            <Header />
            <Welcome />
            <AboutMe />
            <Skills />
            <Projects />
        
        </>
    )
}
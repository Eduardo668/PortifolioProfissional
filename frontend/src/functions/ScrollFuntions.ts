export const scrollToHome = ()=>{
    const section = document.getElementById("home")
    if (section){
        section.scrollIntoView({behavior:"smooth"})
    }
}

export const scrollToAboutMe = ()=>{
    const section = document.getElementById("about-me")
    if (section){
      section.scrollIntoView({behavior:"smooth"})
    }
}

export const scrollToSkills = ()=>{
    const section = document.getElementById("skills")
    if (section){
      section.scrollIntoView({behavior:"smooth"})
    }
}

export const scrollToProjects = ()=>{
  const section = document.getElementById("projects")
  if (section){
    section.scrollIntoView({behavior:"smooth"})
  }


}
export const scrollToContact = ()=>{
  const section = document.getElementById("contact")
  if (section){
    section.scrollIntoView({behavior:"smooth"})
  }


}
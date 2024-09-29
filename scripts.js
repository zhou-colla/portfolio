const EMAIL = 'mailto:xingye@u.nus.edu'
const GITHUB_LINK = "https://github.com/zhou-colla"
const LINKEDIN_LINK = "https://www.linkedin.com/in/xingye-zhou-57859320b/"



function initEvenListeners(){
    document.getElementById("about-nav").addEventListener("click", aboutOnClick)
    document.getElementById("experience-nav").addEventListener("click", experienceOnClick)
    document.getElementById("project-nav").addEventListener("click", projectOnClick)
    document.getElementById("floating-button-container").addEventListener("click", goTopOnClick)
    document.getElementById("linkedin-contact").addEventListener("click", () => openURL(LINKEDIN_LINK))
    document.getElementById("github-contact").addEventListener("click", () => openURL(GITHUB_LINK))
    document.getElementById("email-contact").addEventListener("click", () => openURL(EMAIL))
    // initTechStackIcons()
}

function openURL(url) {
    window.open(url, '_blank')
}

function goTopOnClick(){
    scrollTo("header")
}


function aboutOnClick(){
    scrollTo("#about")
}

function experienceOnClick(){
    scrollTo("#experience")
}

function projectOnClick(){
    scrollTo("#project")
}

function scrollTo(samePageElementIdentifier){
    document.querySelector(samePageElementIdentifier).scrollIntoView({behavior: "smooth"})
}

// function initTechStackIcons(){
//     const fs = require("fs")
//     const iconHolder = document.getElementById("techstacks")
//     fs.readdir("/images/tech-stack-icons/", (err, files) => {
//         if (err) {
//             console.log(err)
//         } else {
//             files.forEach(element => {
//                 iconHolder.innerHTML += `<img class="tech-stack-icon" src="/images/tech-stack-icons/${element}" />`
//             });
//         }
//     })

// }


initEvenListeners()
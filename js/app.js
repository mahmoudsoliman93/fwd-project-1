/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/*
 * Define Global Variables
 */
const sections = document.querySelectorAll("section");
window.onload = buildNav();
/*
 * End Global Variables*/

/* Begin Main Functions
 *
 */
// build the nav menu
function buildNav() {
    sections.forEach.call(sections, function (section) {
        // create li element for each section
        document
            .getElementById("navbar__list")
            .appendChild(createLiElement(section));
    });
}

// Scroll to section on nav bar click
function activeSection(section) {
    removeActiveClass();
    // Set specific section as active
    let elToActivate = document.getElementById(section.id);
    elToActivate.classList.add("your-active-class");
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(sectionId) {
    let elScrollTo = document.getElementById(sectionId);
    elScrollTo.scrollIntoView({
        behavior: "smooth",
    });
}
/*
 * End Main Functions
 */

/*
 * Start Helper Functions
 */
function createLiElement(section) {
    let titleNavBar = section.getAttribute("data-nav");
    let idForActivating = section.getAttribute("id");
    let li = document.createElement("li");
    // adding attributes on new li created element
    li.addEventListener("click", function (event) {
        event.preventDefault();
        if (!event.target.classList.contains("active")) {
            scrollToAnchor(idForActivating);
            //remove actual active class
            removeActiveClass();
            activeElement(idForActivating);
        }
    });
    li.classList.add("menu__link");
    li.setAttribute("id", "barNav" + idForActivating);
    li.appendChild(document.createTextNode(titleNavBar));
    return li;
}

function activeElement(sectionId) {
    let navBarElement = document.getElementById("barNav" + sectionId);
    navBarElement.className += " active";
    let sectionElement = document.getElementById(sectionId);
    sectionElement.classList.add("your-active-class");
}

function removeActiveClass() {
    const section = document.querySelector(".your-active-class");
    section.classList.remove("your-active-class");
    const navBarElements = document.querySelectorAll(".menu__link");
    navBarElements.forEach.call(navBarElements, function (element) {
        element.classList.remove("active");
    });
}

window.addEventListener("scroll", function () {
    for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;
        const navLiElement = document.getElementById("barNav" + section.id)
        if (sectionTop > -100 && sectionTop < 250) {
            section.classList.add("your-active-class");
            navLiElement.classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            navLiElement.classList.remove("active");
        }
    }
});
/**
 * End Helper Functions*/


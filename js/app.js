
window.onload=buildNav();

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

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function removeActiveClass(){
  const section = document.querySelector(".your-active-class");
  section.removeAttribute("class");
}

function createLiElement(section){
  var titleNavBar = section.getAttribute('data-nav');
        var idForActivating = section.getAttribute('id');
        var li = document.createElement('li');
        // adding attributes on new li created element
        li.setAttribute('onclick','activeSection('+ idForActivating +')');
        li.setAttribute('class', 'menu__link');
        li.appendChild(document.createTextNode(titleNavBar));
        return li;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav menu
function buildNav(){
    const sections = document.querySelectorAll("section");
    sections.forEach.call(sections, function(section) {
        // create li element for each section
        document.getElementById("navbar__list").appendChild(createLiElement(section));
        
        // Add class 'active' to each section when near top of viewport
        section.addEventListener('mouseover', function () {
          //remove actual active class
          removeActiveClass();
          // set active class on selected element
          this.setAttribute('class', 'your-active-class');
        });
      });
}

// Scroll to section on nav bar click
function activeSection(section){
  removeActiveClass();
  // Set specific section as active
  var elToActivate = document.getElementById(section.id);
  elToActivate.setAttribute('class', 'your-active-class');
  // scroll on specific section after click on nav menu element
  scrollToAnchor(section.id);
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(sectionId){
  var elScrollTo = document.getElementById(sectionId);
  // scrolling function
  elScrollTo.scrollIntoView({
    behavior: 'smooth'
});
}

/**
 * End Main Functions
 * 
*/






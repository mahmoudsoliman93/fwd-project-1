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
const ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function BuildNavMenu(){
sections.forEach(function(section){
    const sectionId = section.getAttribute('id');
    const sectionTitle = section.getAttribute('data-nav');
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', '#' + sectionId);
    link.setAttribute('class', 'menu__link');
    link.textContent = sectionTitle;
    link.addEventListener('click', function(evt){
        evt.preventDefault();
        section.scrollIntoView({
            behavior: 'smooth',
        });
    });
    li.appendChild(link);
    fragment.appendChild(li);
});
ul.appendChild(fragment);
}

window.addEventListener('load', BuildNavMenu());
/**
 * End Helper Functions
*/

// Build menu 

// Scroll to section on link click
const max_top = 250;
const min_top = 0;
window.addEventListener('scroll', function(){
    for (const section of sections){
        const sectionTop = section.getBoundingClientRect().top;
        const activeLink = ul.querySelector(`a[href="#${section.id}"]`);
        if (sectionTop > 0 && sectionTop < 250){
            section.classList.add('your-active-class');
            activeLink.classList.add('active-link');
        }else{
            section.classList.remove('your-active-class');
            activeLink.classList.remove('active-link');
        }
    }
});
// Set sections as active


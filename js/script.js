

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  
    const YearEl = document.querySelector('.year');
    const HeaderEl = document.querySelector('.header');
    const MenuIconEl = document.querySelector('.btn-mobile-nav');

// Updating copyright to current year
 const currentYear = new Date().getFullYear();
 YearEl.textContent = currentYear;

//  mobile navigation menu event managment
MenuIconEl.addEventListener('click', function(){
    // toggle will add class if there is no, and remove if there is
    HeaderEl.classList.toggle('nav-open');
});

//smooth scrolling wih js
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);
allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    // scroll to sections
    if (href !== '#' && href.startsWith('#')){
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'})
        }
    // close mobile nav
    if (link.classList.contains('main-nav-link'))
    HeaderEl.classList.toggle('nav-open');
    })
});


// STICKY NAVIGATION
const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent);
  if(!ent.isIntersecting){
    document.body.classList.add('sticky');
  }
  if(ent.isIntersecting){
    document.body.classList.remove('sticky');
  }
}, 
{
  // In the viewport
  root: null,
  treshold: 0,
  rootMargin: '-80px',
})
obs.observe(sectionHeroEl);
  
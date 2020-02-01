$(document).ready(function(){

    //Nav Links
    let url
    if(window.location.port) {
        url = window.location.protocol +"//"+ window.location.hostname + ":"+window.location.port
    } else {
        url = window.location.protocol +"//"+ window.location.hostname
    }
    let aboutMeLink = "";
    let resumeLink = "";
    let projectsLink = "";
    let contactLink = "";
    let funLink = "";

    if((window.location.pathname).includes('megVomvas')) {
        aboutMeLink = url + "/megVomvas/";
        resumeLink = url + "/megVomvas/resume.html";
        projectsLink = url + "/megVomvas/projects.html";
        contactLink = url + "/megVomvas/contact.html";
        funLink = ""; //fix later
    } else {
        aboutMeLink = url;
        resumeLink = url + "/resume.html";
        projectsLink = url + "/projects.html";
        contactLink = url + "/contact.html";
        funLink = ""; //fix later
    }

    //Creating navbar here once with dynamic links
    $("header").html(`
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href=${aboutMeLink}> 
          About Me
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href=${resumeLink}>Professional Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href=${projectsLink}>Highlighted Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=${contactLink}>Contact Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=${funLink}>Fun</a>
        </li>
      </ul>
    `)

  //Selector caching for wuindow and animation elements
  let $window = $(window);
  let $animatedElements = $('.animatedElement');
  
  //checking if animated elements are in view on scroll events
  $window.on('scroll', inView);
  // $window.on('resize', inView)

  //catch any animated elements in view initially, before scrolling
  $window.trigger('scroll');

  function inView() {
    //check window positions
    let winHeight = $window.height();
    let winTop = $window.scrollTop();
    let winBottom = winTop+winHeight;

    //iterating through all elements with 'animatedElement' class
    $animatedElements.each(function() {
      //checking position of the element
      let elemHeight = $(this).outerHeight();
      let elemTop = $(this).offset().top;
      let elemBottom = elemTop + elemHeight;

      //checking to see if this element is withing view of the window and applying in view class
      if((elemBottom >= winTop) && (elemTop <= winBottom)) {
        $(this).addClass('inView')
      } else {
        $(this).removeClass('inView')
      }

    })
  }

  });
// function toggleMenu() {
//   var navbar = document.getElementById("navbar");
//   navbar.classList.toggle("active"); // Toggle this class to show/hide the nav items
// }



function toggleMenu() {
  var navbar = document.getElementById("navbar");
  if (navbar.classList.contains('responsive')) {
      navbar.classList.remove('responsive');
  } else {
      navbar.classList.add('responsive');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const switchToTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', switchToTheme);
  });
});

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];




let counter=0;

window.onscroll = function() {


  if (counter===0){

  
  if (window.scrollY > 200) { // Change '200' to the number of pixels scrolled before showing the popup
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Disable scrolling\
    counter++;
  }
  
}
}; 


span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}
(function(){
  document.addEventListener('DOMContentLoaded' ,function(){
    alert("Welcome to Kishore project")
  })
}) ();




var btn = document.getElementById('toggleBtn');
var slide = document.getElementById('sidebar');

btn.addEventListener('click', function() {
  if (slide.classList.contains('open')) {
    slide.classList.remove('open'); 
  } else {
    slide.classList.add('open'); 
  }
});

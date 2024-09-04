(function(){
  document.addEventListener('DOMContentLoaded' ,function(){
    alert("Welcome to Kishore project")
  })
}) ();




var btn = document.getElementById('toggleBtn');
var sidebar = document.getElementById('sidebar');

btn.addEventListener('click', function() {
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('visible');
    setTimeout(() => sidebar.classList.add('show'), 10); 
  } else {
    sidebar.classList.remove('show');
    setTimeout(() => {
      sidebar.classList.remove('visible');
      sidebar.classList.add('hidden');
    }, 300); 
  }
});
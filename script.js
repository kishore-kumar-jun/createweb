function onof() {
  
  var slidediv = document.querySelector('.slidediv');
  

  if (slidediv.classList.contains('showdiv')) {
    slidediv.classList.remove('showdiv');
  } else {
    slidediv.classList.add('showdiv');
  }
}

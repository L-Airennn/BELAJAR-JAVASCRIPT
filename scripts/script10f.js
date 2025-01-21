function toggleClass(){
  const button = document.querySelector('.Gaming-button');

  if(!button.classList.contains('is-toggled')) {
  button.classList.add('is-toggled');
  } else{
    button.classList.remove('is-toggled')
  }
}

function toggleClass2(){
  const button = document.querySelector('.Music-button');

  if(!button.classList.contains('is-toggled')) {
  button.classList.add('is-toggled');
  } else{
    button.classList.remove('is-toggled')
  }
}

function toggleClass3(){
  const button = document.querySelector('.Tech-button');

  if(!button.classList.contains('is-toggled')) {
  button.classList.add('is-toggled');
  } else{
    button.classList.remove('is-toggled')
  }
}
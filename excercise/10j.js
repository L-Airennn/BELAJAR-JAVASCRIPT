let calculation = localStorage.getItem('calculationz') || '';

displayCalculatorValue();

function updateCalculations(value){

  calculation += value;
  displayCalculatorValue();


  localStorage.setItem('calculationz', calculation);
}

function displayCalculatorValue(){
  document.querySelector('.js-hasilKalkulasi')
    .innerHTML = `${calculation}`
}
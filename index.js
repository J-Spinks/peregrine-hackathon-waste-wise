const calculateBtn = document.getElementById("calc-btn");
const outputContainerDiv = document.getElementById("output-container");
const outputContainerDivTwo = document.getElementById("output-container-two");
const inputValue = document.getElementById("passenger-input");
const resetBtn = document.getElementById("reset-calc-btn")





calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValToNum = parseInt(inputValue.value);


  if(inputValToNum === 3000){
    outputContainerDiv.style.display = "block"
  };

  if(inputValToNum === 2000){
    outputContainerDivTwo.style.display = "block"
  };

});


resetBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const inputValToNum = parseInt(inputValue.value);
  outputContainerDiv.style.display = "none"
  inputValue.value = ""
  outputContainerDivTwo.style.display = "none"

});

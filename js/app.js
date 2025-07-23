//  ====Input FIeld ==== 
 
let inputNames = document.getElementById("inputNames")
let inputEmail = document.getElementById("inputEmail")
let inputNumber = document.getElementById("inputNumber")
// ====Input FIeld====

// ======Warning Field====== 
let nameError =document.getElementById("nameError")
let emailError =document.getElementById("emailError")
let numberError =document.getElementById("numberError")
// ======Warning Field====== 
let loginBtn = document.getElementById("loginBtn")

 let inputSuccess= document.getElementById("inputSuccess")





loginBtn.addEventListener("click", () => {
  if (inputNames.value !=="") {
  if (inputEmail.value !=="") {
    if (inputNumber.value !=="") {
      inputSuccess.classList.remove("hidden")
    }
    else {
      numberError.classList.remove("hidden")
      
    }

  }
    
  else {
    emailError.classList.remove("hidden")
    
    }
  
  }
  
 else {
  nameError.classList.remove("hidden")
  }
  
})
  
let playerOne =document.getElementById("playerOne")
let nameErrors = document.getElementById("nameErrors")
let secenodPlayer = document.getElementById("secenodPlayer")
let firstScreen = document.getElementById("firstScreen")

let startBtn =document.getElementById("startBtn")

startBtn.addEventListener("click", () => {
   if (playerOne.value !== "") {
     secenodPlayer.classList.remove("hidden")
     firstScreen.classList.add("hidden")
    
  }

  else {
     nameErrors.classList.remove("hidden") 
  }

})






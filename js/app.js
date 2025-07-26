// //  ====Input FIeld ==== 
 
// let inputNames = document.getElementById("inputNames")
// let inputEmail = document.getElementById("inputEmail")
// let inputNumber = document.getElementById("inputNumber")
// // ====Input FIeld====

// // ======Warning Field====== 
// let nameError =document.getElementById("nameError")
// let emailError =document.getElementById("emailError")
// let numberError =document.getElementById("numberError")
// // ======Warning Field====== 
// let loginBtn = document.getElementById("loginBtn")

// let inputSuccess = document.getElementById("inputSuccess")
 
// loginBtn.addEventListener("click", () => {
//   if (inputNames.value !=="") {
//   if (inputEmail.value !=="") {
//     if (inputNumber.value !=="") {
//       inputSuccess.classList.remove("hidden")
//     }
//     else {
//       numberError.classList.remove("hidden")
      
//     }

//   }
    
//   else {
//     emailError.classList.remove("hidden")
    
//     }
  
//   }
  
//  else {
//   nameError.classList.remove("hidden")
//   }
  
// })
  
let playerOne =document.getElementById("playerOne")
let nameErrors = document.getElementById("nameErrors")
let firstScreen = document.getElementById("firstScreen")
let startBtn = document.getElementById("startBtn")
// ===============================================
let playerOneInput = document.getElementById("playerOneInput")
let letsPlayOneBtn = document.getElementById("letsPlayOneBtn")
let playerNameError = document.getElementById("playerNameError")

// =====================================================

let playerTwoInput = document.getElementById("playerTwoInput")
let letsPlayTowBtn = document.getElementById("letsPlayTowBtn")
let playerTowNameError = document.getElementById("playerTowNameError")

// ==============================================================
let playerTwoInputNum =document.getElementById("playerTwoInputNum")
let letsPlayTowBtntoo =document.getElementById("letsPlayTowBtntoo")
let playerTowNumberError = document.getElementById("playerTowNumberError")
// ============================================

let finalNumber = document.getElementById("finalNumber")
let finalBtn = document.getElementById("finalBtn")

let winOne =document.getElementById("winOne")
let wineTwo =document.getElementById("wineTwo")


// =========================== 
startBtn.addEventListener("click", () => {
   if (playerOne.value !== "") {
     secenodPlayer.classList.remove("hidden")
     firstScreen.classList.add("hidden")
     pOneD.innerText= playerOne.value
  }
  else {
     nameErrors.classList.remove("hidden") 
  }
})
// ==================================

// ------------------------------------
letsPlayOneBtn.addEventListener("click", () => {
  if (playerOneInput.value !== "") {
    secenoOnePlayer.classList.remove("hidden")
    secenodPlayer.classList.add("hidden")
    

  }

  else {
    playerNameError.classList.remove("hidden")
  }

})
// =================================================


letsPlayTowBtn.addEventListener("click", () => {
  if (playerTwoInput.value !== "") {
    secenoOnePlayerNumer.classList.remove("hidden")
    secenoOnePlayer.classList.add("hidden")
    secndDyNam.innerText = playerTwoInput.value;


  }

  else {
    playerTowNameError.classList.remove("hidden")
  }
})

letsPlayTowBtntoo.addEventListener("click", () => {
  if (playerTwoInputNum.value !== "") {
    thirdPlayerNumer.classList.remove("hidden")
    secenoOnePlayerNumer.classList.add("hidden")
  }
  
  else {
    playerTowNumberError.classList.remove("hidden")
  }
})

finalBtn.addEventListener("click", () => {
  if (playerOneInput.value == playerTwoInputNum.value) {
    thirdPlayerNumer.classList.add("hidden")
    winScreen.classList.remove("hidden")
    winOne.innerText=("Win player-2")


    // console.log('win player 2');
    
  }
  else {
    wineTwo.innerText=("Win player-1")
  }
})



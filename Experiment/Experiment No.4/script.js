//========================
// Global Scope
//========================

const input = document.getElementById("password");
const result = document.getElementById("result");
const verifyBtn = document.getElementById("verifyBtn");
const toggle = document.getElementById("toggle");


//========================
// Function Declaration
//========================

function isPalindrome(text){

const cleaned = text.replace(/\s/g,'');

return cleaned === cleaned.split('').reverse().join('');

}


//========================
// Function Expression
//========================

const checkStrength = function(password){

if(password.length<4)
return "Weak";

if(password.length<8)
return "Moderate";

return "Strong";

};


//========================
// Arrow Function
//========================

const showResult=(message)=>{

result.innerHTML=message;

};


//========================
// Closure
//========================

function passwordCounter(){

let count=0;

return function(){

count++;

console.log("Checked :",count);

};

}

const counter=passwordCounter();


//========================
// IIFE
//========================

(function(){

console.log("Apex Secure Bank Loaded");

})();


//========================
// Event
//========================

verifyBtn.addEventListener("click",()=>{

try{

let password=input.value.trim();

if(password==="")
throw new Error("Please enter password.");

counter();

let strength=checkStrength(password);

if(isPalindrome(password)){

showResult(

`<div class="success">

Password Created (${strength})<br>

(Palindrome)

</div>

Password Strength: ${strength} (Palindrome).<br>

This password is a palindrome.<br>

You can now change it if needed.`

);

}

else{

showResult(

`<div class="success">

Not a Palindrome

</div>

Password Strength : ${strength}`

);

}

}

catch(error){

alert(error.message);

}

finally{

console.log("Verification Completed");

}

});


//========================
// Show Password
//========================

toggle.addEventListener("click",()=>{

if(input.type==="password"){

input.type="text";

toggle.className="fa-solid fa-eye";

}

else{

input.type="password";

toggle.className="fa-solid fa-eye-slash";

}

});

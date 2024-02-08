 const p2El = document.querySelector(".p2")
 
 
p2El.addEventListener("click",()=>{
 p2El.previousElementSibling.style.backgroundColor = "gold";
 p2El.nextElementSibling.style.backgroundColor = "red";
 p2El.parentElement.style.backgroundColor = "green";
})
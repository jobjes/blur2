function openForm(){

document.getElementById("popup").classList.add("active");

}


function closeForm(){

document.getElementById("popup").classList.remove("active");

}


window.onclick=function(event){

let popup=document.getElementById("popup");

if(event.target==popup){

closeForm();

}

};


document.getElementById("notifyForm").addEventListener("submit",function(e){

e.preventDefault();

let button=this.querySelector(".submit");

button.innerText="Loading...";


setTimeout(()=>{

button.innerText="Added ✓";

document.getElementById("successMessage").innerText="You're on the list";

},1000);


});

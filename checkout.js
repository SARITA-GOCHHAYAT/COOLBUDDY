let form=document.querySelector("form");
let input=document.querySelectorAll("form>input");
let detail=document.getElementById("detail");
let cont=document.querySelector("container");
let lsSign=JSON.parse(localStorage.getItem("signdata"))||[];
let lsChiku=JSON.parse(localStorage.getItem("chikudata"))||[];
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(input==""){
        alert("please fill all thee inputs");
    }
  else if(check(lsSign)){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title:'Your Order is Placed, Will be Delivered in 15Days, Happy Shopping',
        showConfirmButton: false,
        timer: 1500
      });
      let name=document.getElementById("name");
let email=document.getElementById("email");
let phoneno=document.getElementById("phoneno");
let city=document.getElementById("city");
let state=document.getElementById("state");
let zipcode=document.getElementById("zipcode");
let but=document.createElement("button");
but.innerHTML="OK";
but.addEventListener("click",function(){
window.location.href="./index.html";
})
but.style.display="block";
but.style.margin="5%";
but.style.backgroundColor="green";
but.style.width="100px";
but.style.height="50px";
but.style.color="white";

detail.style.height="300px";
detail.style.width="300px";
detail.style.backgroundColor="white";
detail.style.color="black";
detail.style.padding="3%"


name=name.value;
email=email.value;
phoneno=phoneno.value;
city=city.value;
state=state.value;
zipcode=zipcode.value;
form.style.display="none";
detail.append("name-  "+name+",   ","email-  "+email+",   ","Phoneno-  "+phoneno+",   ","city-  "+city+",   ","state-  "+state+",   ","zipcode-  "+zipcode,but);
   }
   else{
    alert("Hey,You are a NewUser");
    window.location.href="./signin.html";
   }
})
function check(data){
for(let i=0;i<data.length;i++){
    if(data[i].email===email.value){
        return true;
    }
}
return false;
}
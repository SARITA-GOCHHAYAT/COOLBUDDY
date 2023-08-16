   let form=document.querySelector("form");
   let login = document.getElementById("loginBtn");
   let signin = document.getElementById("signin");
    let nameinp = document.getElementById("name");
    let title = document.getElementById("title");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

 let lsSign=JSON.parse(localStorage.getItem("signdata"))||[];

login.addEventListener("click",function(event){
    event.preventDefault();
window.location.href="./login.html";
 });
 signin.addEventListener("click",function(event){
    event.preventDefault();
    if(nameinp.value=="" ||email.value==""||password.value==""){
        alert("Please fill the all inputs.😑");
    }
    else{
        let flag=false;
        for(let i=0;i<lsSign.length;i++){
            if(lsSign[i].email==email.value){
                flag=true;
              break;
               }
        }
        if(flag===true){
            nameinp.value="";
            email.value="";
    password.value="";
            alert("Hey! You are a Existing User,Please login from here🤗🤗🤗.");
            window.location.href="./login.html";
        }      
     else{
    let obj={
        name:nameinp.value,
        email:email.value,
        password:password.value,
            }
        lsSign.push(obj);
        localStorage.setItem("signdata",JSON.stringify(lsSign));
        email.value="";
    password.value="";
    nameinp.value="";
        alert("signin successfully");
        window.location.href= "./product-bag.html";
    }
}
 });
  

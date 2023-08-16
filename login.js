 let login=document.getElementById("loginBtn");
 let signin=document.getElementById("signin");
 let title=document.getElementById("title");
 let email=document.getElementById("email");
 let password=document.getElementById("password");
let home=document.getElementById("home");
let lsSign=JSON.parse(localStorage.getItem("signdata"))||[];
  signin.addEventListener("click",function(event){
    event.preventDefault();
 window.location.href="http://127.0.0.1:5500/-ripe-receipt-7221/signin.html"  ;
  });

  login.addEventListener("click",function(event){
    event.preventDefault();
    if(email.value==""||password.value==""){
        alert("Please fill the all inputs.😑");
    }else{
        let flag=false;
for(let i=0;i<lsSign.length;i++) {
    if(lsSign[i].email === email.value && lsSign[i].password ===password.value){
        flag=true;
    break;
    }
}
if(flag==true){
    alert("login successfully");
    email.value="";
    password.value="";
    window.location.href= "./product-bag.html";
}else{
    let a=false;
    for(let i=0;i<lsSign.length;i++){
        if( lsSign[i].email === email.value && lsSign[i].password !==password.value ){
            a=true;
            break;
            } 
    }
    if(a==true){
        alert("wrong credential,please put correct password.");
            password.value="";
    }else{
        email.value="";
    password.value="";
        alert("new user😲,Please signin from here.");
        window.location.href= "./signin.html";
}
}
    }

});
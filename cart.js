let cont=document.getElementById("container");
let cartdata=JSON.parse(localStorage.getItem("cartlist"))||[];
let total=document.getElementById("total");
function display(data){
    cont.innerHTML="";
    data.forEach(e => {
        let imagedata=[e.image1,e.image2,e.image3];
        let i=0;
        let div=document.createElement("div");
        div.setAttribute("id","cont-div");
let topdiv=document.createElement("div");
topdiv.setAttribute("id","topdiv");
let left=document.createElement("p");
left.innerHTML="<";
left.setAttribute("class","sign");
left.addEventListener("click",function(){
    if(i<0){
        i=2;
    }
    img.setAttribute("src",imagedata[i--]); 
})
let img=document.createElement("img");
img.setAttribute("src",imagedata[i]);
img.setAttribute("alt","error");
let right=document.createElement("p");
right.innerHTML=">";
right.setAttribute("class","sign");
right.addEventListener("click",function(){
    if(i==3){
        i=0;
    }
    img.setAttribute("src",imagedata[i++]); 
})
let botdiv=document.createElement("div");
let name=document.createElement("h2");
name.innerHTML=e.name;
let price=document.createElement("h4");
price.innerHTML=`₹${e.price}`;
let sex=document.createElement("p");
sex.innerHTML=e.sex;
let type=document.createElement("p");
type.innerHTML=e.type;
let butdiv=document.createElement("div");
butdiv.setAttribute("id","butdiv");
let decrement=document.createElement("button");
decrement.innerHTML="-";
decrement.addEventListener("click",function(){
    if(e.quantity>1){
        e.quantity--;
    }
    localStorage.setItem("cartlist",JSON.stringify(cartdata));
    display(cartdata);
})
let quantity=document.createElement("span");
quantity.innerHTML=e.quantity;
let increment=document.createElement("button");
increment.innerHTML="+";
increment.addEventListener("click",function(){
    e.quantity++;
    localStorage.setItem("cartlist",JSON.stringify(cartdata));
    display(cartdata);
})
let buttdiv=document.createElement("div");
buttdiv.setAttribute("id","buttdiv");
let removebtn=document.createElement("button");
removebtn.innerHTML="Remove";
removebtn.setAttribute("id","remove");
removebtn.addEventListener("click",function(){
    cartdata=cartdata.filter(function(ele){
        return ele.name!=e.name;
    });
    localStorage.setItem("cartlist",JSON.stringify(cartdata));
    display(cartdata);
   alert("Product deleted from cartlist");
   })
butdiv.append(decrement,quantity,increment);
buttdiv.append(removebtn);
topdiv.append(left,img,right);
botdiv.append(name,price,sex,type);
div.append(topdiv,botdiv,butdiv,buttdiv);
cont.append(div);


    });
   
    let sum=0;
for(let i=0;i<cartdata.length;i++){
    sum=sum+cartdata[i].quantity*cartdata[i].price;
}
total.innerHTML=`₹${sum}`;


}

  


    function check1(e){
        for(let i=0;i<cartdata.length;i++){
            if(e.name===cartdata[i].name){
                return true;
            }
        }
        return false;
    }

   
  
    let payment=document.getElementById("payment");
    payment.addEventListener("click",function(){
        window.location.href="./checkout.html";
    })
    display(cartdata);
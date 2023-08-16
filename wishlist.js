let cont=document.getElementById("container");
let wishdata=JSON.parse(localStorage.getItem("wishlist"))||[];
let cartdata=JSON.parse(localStorage.getItem("cartlist"))||[];

display(wishdata);
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
let buttdiv=document.createElement("div");
buttdiv.setAttribute("id","buttdiv");
let removebtn=document.createElement("button");
removebtn.innerHTML="Remove";
removebtn.setAttribute("id","remove");
removebtn.addEventListener("click",function(){
    wishdata=wishdata.filter(function(ele){
        return ele.name!=e.name;
    });
    localStorage.setItem("wishlist",JSON.stringify(wishdata));
    display(wishdata);
   alert("Product deleted from wishlist");
   })
   let cartbtn=document.createElement("button");
   cartbtn.innerHTML="Add To Cart";
   cartbtn.setAttribute("id","cartbtn");
   cartbtn.addEventListener("click",function(){
    if(check1(e)){
        alert("Product Already in Cart");
    }else{
        cartdata.push({...e,quantity:1});
        localStorage.setItem("cartlist",JSON.stringify(cartdata));
        alert("Product Added to Cart");
    }
   })

buttdiv.append(cartbtn,removebtn);
topdiv.append(left,img,right);
botdiv.append(name,price,sex,type);
div.append(topdiv,botdiv,buttdiv);
cont.append(div);
    });
}

    function check1(e){
        for(let i=0;i<cartdata.length;i++){
            if(e.name===cartdata[i].name){
                return true;
            }
        }
        return false;
    }
  
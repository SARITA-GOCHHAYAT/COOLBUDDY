// let men_api="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products?sex=men";
// let api="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products?search=tabby";
// let wallets="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products/?type=wallets";
// let women="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products/?sex=female";

let cont=document.getElementById("container");
let search=document.getElementById("input");
let api="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products/?type=bag||type=wallets";
let wishdata=JSON.parse(localStorage.getItem("wishlist"))||[];
let cartdata=JSON.parse(localStorage.getItem("cartlist"))||[];
let empty=[];
fetch(api).then(function(res){
    return res.json();
})
.then(function(data){
    empty=data;
    display(data);
})
.catch(function(err){
    console.log(err);
})
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
let wishbtn=document.createElement("button");
wishbtn.innerHTML="Wishlist";
wishbtn.setAttribute("id","wishbtn");
wishbtn.addEventListener("click",function(){
    if(check(e)){
       alert("Product Already in Wishlist");
    }else{
       wishdata.push(e);
       localStorage.setItem("wishlist",JSON.stringify(wishdata));
       alert("Product Added to Wishlist");
    }
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

buttdiv.append(wishbtn,cartbtn);
topdiv.append(left,img,right);
botdiv.append(name,price,sex,type);
div.append(topdiv,botdiv,buttdiv);
cont.append(div);
    });
}
search.addEventListener("input",function(){
    let filtered=empty.filter(function(e){
        if(e.type.toUpperCase().includes(search.value.toUpperCase())===true){
          return true;
        }else{
            return false;
        }
    })
   display(filtered); 
})
let image1=document.getElementById("top-image1");
let image2=document.getElementById("top-image2");
let image3=document.getElementById("top-image3");
image1.addEventListener("click",function(){
    display(empty);
})
image2.addEventListener("click",function(){
    let filtered1=empty.filter(function(e){
        if(e.sex==="men"){
            return true;
        }else{
            return false;
        }
    })
    display(filtered1);
})
image3.addEventListener("click",function(){
    let filtered3=empty.filter(function(e){
        if(e.sex==="female"){
            return true;
        }
        else{
            return false;
        }
    })
    display(filtered3);
})


let extrap1=document.getElementById("extrap1");
extrap1.addEventListener("click",function(){
    window.location.href= "./product-Phonecase.html";
});

let extrap2=document.getElementById("extrap2");
extrap2.addEventListener("click",function(){
    window.location.href= "./product-watch.html";
});


let select=document.getElementById("select");
select.addEventListener("change",function(){
    if(select.value==="lth"){
        let selectData=[...empty];
    selectData.sort(function(a,b){
            return (a.price-b.price);
        })
        display(selectData);
    }
    
    if(select.value==="htl"){
        let selectData=[...empty];
    selectData.sort(function(a,b){
            return (b.price-a.price);
        })
        display(selectData);
    }
})
function check(e){
    for(let i=0;i<wishdata.length;i++){
        if(e.name===wishdata[i].name){
            return true;
        }
    }
    return false;
    }

    function check1(e){
        for(let i=0;i<cartdata.length;i++){
            if(e.name===cartdata[i].name){
                return true;
            }
        }
        return false;
    }

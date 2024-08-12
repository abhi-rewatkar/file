let fileIcons = JSON.parse(localStorage.getItem("product")) || [];
console.log(fileIcons);

let root = document.querySelector(".root");

function displayFileIcons(fileIcons) {
  root.innerHTML = null;
  fileIcons.forEach((file) => {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.className = "img";
    img.src = file.url;

    let text = document.createElement("p");
    text.className = "text";
    text = file.text;

    let delButton = document.createElement("button");
    delButton.className = 'btn';
    delButton.innerText = "Delete";
    delButton.addEventListener('click' ,()=>{delcart(img,text)} );
    AutoDelete(img.src,text);

    card.append(img, text,delButton);
    root.append(card);

  });
}
displayFileIcons(fileIcons);


//auto deleteing the cards
function AutoDelete(img,text) {
  setTimeout(() => {
    let products = JSON.parse(localStorage.getItem('product'))
    let filterpro = products.filter(ele => ele.url !== img )
    localStorage.setItem('product',JSON.stringify(filterpro) )   
    displayFileIcons(filterpro);
  }, 30000);
}


//delete all at once
function clearall() {
    alert("want to delete permanently");

  root.innerHTML = null;
  localStorage.clear();
}


// deleting the perticullar cart 
function delcart(img,text){
    let products = JSON.parse(localStorage.getItem('product'))
    let filterpro = products.filter(ele => ele.url !== img.src )
    localStorage.setItem('product',JSON.stringify(filterpro) )   
    displayFileIcons(filterpro);

}
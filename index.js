const fileIcons = {
  ".txt": "https://via.placeholder.com/200?text=TXT",
  ".pdf": "https://via.placeholder.com/200?text=PDF",
  ".mp3": "https://via.placeholder.com/200?text=MP3",
  ".exe": "https://via.placeholder.com/200?text=EXE",
  ".rar": "https://via.placeholder.com/200?text=RAR",
  ".docx": "https://via.placeholder.com/200?text=DOCX",
  ".jpg": "https://via.placeholder.com/200?text=JPG",
  ".png": "https://via.placeholder.com/200?text=PNG",
  ".gif": "https://via.placeholder.com/200?text=GIF",
  ".zip": "https://via.placeholder.com/200?text=ZIP",
};

let files = [
  "document.txt",
  "report.pdf",
  "song.mp3",
  "setup.exe",
  "archive.rar",
  "resume.docx",
  "photo.jpg",
  "image.png",
  "animation.gif",
  "data.zip",
];

let root = document.querySelector(".root");

function displayFileIcons(files) {
  files.forEach((file) => {
    const extension = file.split(".").pop();
    const url = fileIcons["." + extension];
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.className = "img";
    img.src = url;

    let name = file.split(".");

    let text = document.createElement("p");
    text.className = "text";
    text = name[0];

    let binButton = document.createElement("button");
    binButton.className = 'btn';
    binButton.innerText = "Move Too Bin"
    binButton.addEventListener('click' , () => {
        movetoobin(name[1],text,img)
  });

  let editButton = document.createElement("button");
    editButton.className = 'btn';
    editButton.innerText = "edit"
    editButton.addEventListener('click' , () => {
        editfile()
  });

    card.append(img, text, binButton,editButton);
    root.append(card);
  });
}
displayFileIcons(files);


function movetoobin(ext,text,img){
    let card = {}
    let url = fileIcons["." + ext]
    card.url = url;
    card.text = text;
    let productfLS = JSON.parse(localStorage.getItem('product')) || [];
    // console.log(productfLS)
    productfLS.push(card)
    // console.log(productfLS)
    productfLS = localStorage.setItem('product' ,JSON.stringify(productfLS) )

}


function editfile(){
    console.log("hello")

}
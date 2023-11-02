const item__key = document.querySelector(".item__key");
const item__KeyIMG = document.querySelector(".item__key-IMG");
let hasKey = 0; //열쇠를 갖고있으면 1, 없으면 0.

const item__teardPaper = document.querySelector(".item__teard-paper");
const item__teardPaper2 = document.querySelector(".item__teard-paper2");

const item__teardPaperIMG = document.querySelector(".item__teard-paper-IMG");
const item__teardPaper2IMG = document.querySelector(".item__teard-paper2-IMG");

item__key.addEventListener("click", () =>{
    clickDiv();
     removeHidden(item__KeyIMG);
    divText.innerText = "열쇠. 서랍을 열 수 있을 것 같다.";
})
item__teardPaper.addEventListener("click", () =>{
    clickDiv();
     removeHidden(item__teardPaperIMG);
    divText.innerText = "찢어진 종이, 알 수 없는 기호들이 쓰여있다.";
})
item__teardPaper2.addEventListener("click", () =>{
    clickDiv();
     removeHidden(item__teardPaper2IMG);
    divText.innerText = "찢어진 종이2, 번호들이 적혀있다.";
})


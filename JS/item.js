const item__key = document.querySelector(".item__key");
const item__KeyIMG = document.querySelector(".item__key-IMG");
let hasKey = 0; //열쇠를 갖고있으면 1, 없으면 0.

item__key.addEventListener("click", () =>{
    clickDiv();
     removeHidden(item__KeyIMG);
    divText.innerText = "열쇠를 얻었다. 서랍을 열 수 있을 것 같다.";
})
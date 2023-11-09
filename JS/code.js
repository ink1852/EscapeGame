const Room1 = document.querySelector(".Room1");
const Room2 = document.querySelector(".Room2");

const lockedDoor = document.querySelector(".Locked-door");
const doorForm = document.querySelector(".door-form");
const doorInput = document.querySelector(".doorInput");
const door__h3 = document.querySelector(".door__h3");
const doorCorrectAnswer = "7416";
let doorInputAnswer = "";

const Room1_Drawers = document.querySelector(".Room1__서랍장");
const inkImg = document.querySelector(".painting__액자");

const leftBtn = document.querySelector(".leftPage");
const rightBtn = document.querySelector(".rightPage");


const divClick = document.querySelector(".whenYouClickDiv");

const doorIMG = document.querySelector(".door-IMG");
const inkImgIMG = document.querySelector(".inkImg-IMG");
const drawerIMG = document.querySelector(".drawer-IMG");
const OpenDrawerIMG = document.querySelector(".open-drawer-IMG");

const divText = document.querySelector(".imgText");

function addHidden(div){
    div.classList.add("hidden");
}

function removeHidden(div){
    div.classList.remove("hidden");
}

leftBtn.addEventListener("click",() => {
    addHidden(Room1);
     removeHidden(Room2);
    addHidden(leftBtn);
     removeHidden(rightBtn);
    
})
rightBtn.addEventListener("click",() => {
     removeHidden(Room1);
    addHidden(Room2);
     removeHidden(leftBtn);
    addHidden(rightBtn);
})

function clickDiv(){
     removeHidden(divClick);
};

//lockedDoor
function doorClickDiv(){
    removeHidden(doorIMG);
    removeHidden(doorInput);
   divText.innerText = "이 방의 유일한 문. 알 수 없는 문자들이 쓰여있다.";
   if(doorInputAnswer == doorCorrectAnswer){ 
       addHidden(doorInput); 
       divText.innerText = "";
       door__h3.innerText = "good";
   }
}
lockedDoor.addEventListener("click", clickDiv);
lockedDoor.addEventListener("click",  doorClickDiv);

//lockedDoor 답안 검사
doorForm.addEventListener("submit", (e) => {
   e.preventDefault();
   if(doorInput.value == doorCorrectAnswer){ 
    doorInput.value = ""; 
    location.href = "end.html";
   }
   else{
       doorInput.value = "";
       door__h3.style.color = COLOR_RED;
       door__h3.innerText = WrAnText;
   }   
})

 
//img
function imgClickDiv(){
     removeHidden(inkImgIMG);
    divText.innerText = "그림이다.";
};
inkImg.addEventListener("click", clickDiv);
inkImg.addEventListener("click", imgClickDiv);

//서랍장
function drawerClickDiv(){
    if(hasKey == 1){
         removeHidden(OpenDrawerIMG);
         removeHidden(item__teardPaper2);
        divText.innerText = "서랍이 열렸다. 안에서 찢어진 종이2를 발견했다.";
        
    }
    else{
         removeHidden(drawerIMG);
        divText.innerText = "서랍은 잠겨있다. 열쇠가 필요해 보인다.";
    }    
};
Room1_Drawers.addEventListener("click", clickDiv);
Room1_Drawers.addEventListener("click", drawerClickDiv);

const divCloseBtn = document.querySelector(".divCloseBtn");
divCloseBtn.addEventListener("click",()=>{
    divText.innerText =""; 

    addHidden(divClick);

    addHidden(doorIMG);
    addHidden(doorInput);
    doorInput.value = "";
    door__h3.innerText = "";

    addHidden(inkImgIMG);
    addHidden(drawerIMG);

    addHidden(electronicBoardIMG);
    addHidden(전자기판input);
    전자기판input.value = "";
    전자기판__h3.innerText = "";

    addHidden(Room2__금고IMG);
    addHidden(금고input);
    금고input.value = "";
    금고__h3.innerText = "";


    addHidden(item__KeyIMG);
    addHidden(item__teardPaperIMG);
    addHidden(item__teardPaper2IMG);

    addHidden(OpenDrawerIMG);
    addHidden(drawer2_IMG);
})
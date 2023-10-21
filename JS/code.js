const Room1 = document.querySelector(".Room1");
const Room2 = document.querySelector(".Room2");
const lockedDoor = document.querySelector(".Locked-door");
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
    divText.innerText = "이 방의 유일한 문, 도어락 형태다.";
};
lockedDoor.addEventListener("click", clickDiv);
lockedDoor.addEventListener("click",  doorClickDiv);
 
//img
function imgClickDiv(){
     removeHidden(inkImgIMG);
    divText.innerText = "그림이다. 'INK'옆의 색깔들은 무언가의 힌트일 수도.";
};
inkImg.addEventListener("click", clickDiv);
inkImg.addEventListener("click", imgClickDiv);

//서랍장
function drawerClickDiv(){
     removeHidden(drawerIMG);
    divText.innerText = "서랍은 잠겨있다. 열쇠가 필요해 보인다.";
};
Room1_Drawers.addEventListener("click", clickDiv);
Room1_Drawers.addEventListener("click", drawerClickDiv);

const divCloseBtn = document.querySelector(".divCloseBtn");
divCloseBtn.addEventListener("click",()=>{
    addHidden(divClick);
    addHidden(doorIMG);
    addHidden(inkImgIMG);
    addHidden(drawerIMG);

    addHidden(electronicBoardIMG);
    addHidden(전자기판input);
    전자기판__h3.innerText = "";

    addHidden(Room2__금고IMG);
    addHidden(금고input);
    금고__h3.innerText = "";
    

})
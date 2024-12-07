bird = document.createElement("img");
bird.src = "bird.png";
bird.style.width = "100px";
bird.style.heigth = "100px";
bird.style.alignSelf = "center";
document.getElementById("tela").appendChild(bird);

posList = ["flex-start", "center", "flex-end"];
posIndex = 1;
function updatePos(){
    bird.style.alignSelf = posList[posIndex];
}   

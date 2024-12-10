jogador = "X";

function checarLinhas(){
    let linhas = document.querySelectorAll(".linha");
    for(const linha of linhas){
        let celulas = linha.querySelectorAll(".celula");
        let simbolo1 = celulas[0].textContent;
        let simbolo2 = celulas[1].textContent;
        let simbolo3 = celulas[2].textContent;

        if(simbolo1 !== "" && simbolo1 === simbolo2 && simbolo1 === simbolo3){
            return true;
        }
    }
}

function checarColunas(){
    let linhas = document.querySelectorAll(".linha");
    let coluna0 = [];
    let coluna1 = [];
    let coluna2 = [];
    for(const linha of linhas){
        let celulas = linha.querySelectorAll(".celula");
        coluna0.push(celulas[0].textContent);
        coluna1.push(celulas[1].textContent);
        coluna2.push(celulas[2].textContent)
    }
    if(coluna0[0] !== "" && coluna0[0] === coluna0[1] && coluna0[0] === coluna0[2]){
        return true;
    } else if(coluna1[0] !== "" && coluna1[0] === coluna1[1] && coluna1[0] === coluna1[2]){
        return true;
    } else if(coluna2[0] !== "" && coluna2[0] === coluna2[1] && coluna2[0] === coluna2[2]){
        return true;
    }
}

function checarDiagonais(){
    let linhas = document.querySelectorAll(".linha");
    let meio = linhas[1].querySelectorAll(".celula")[1].textContent;
    let coluna0 = [linhas[0].querySelectorAll(".celula")[0].textContent, linhas[0].querySelectorAll(".celula")[2].textContent];
    let coluna2 = [linhas[2].querySelectorAll(".celula")[0].textContent, linhas[2].querySelectorAll(".celula")[2].textContent];
    if(meio !== "" && meio === coluna0[0] && meio === coluna2[1]){
        return true;
    }else if(meio !== "" && meio === coluna0[1] && meio === coluna2[0]){
        return true;
    }
    console.log(coluna0[0])
}

function checarEmpate(){
    let linhas = document.querySelectorAll(".linha");
    let celulas = [];
    for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            celulas.push(linhas[i].querySelectorAll(".celula")[j].textContent);
        }
    }
    if(!celulas.includes("") && !checarLinhas() && !checarColunas() && !checarDiagonais()){
        return true;
    }
}

function limpar(){
    for(i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            document.querySelectorAll(".linha")[i].querySelectorAll(".celula")[j].textContent = "";
            document.querySelectorAll(".linha")[i].querySelectorAll(".celula")[j].style.backgroundColor = "rgb(211, 211, 211)";
        }
    }
    jogador = "X";
}

function mudarCor(event){
    if(jogador === "X"){
        event.target.style.backgroundColor = "blue";
    }else if(jogador === "O"){
        event.target.style.backgroundColor = "red";
    }
}

function marcar(event){
    let celula = event.target;
    if(celula.textContent === ""){
        celula.textContent = jogador;
        mudarCor(event);
        if(checarLinhas() || checarColunas() || checarDiagonais()){
            alert("O jogador " + jogador + " venceu!");
            limpar()
        }else if(checarEmpate()){
            alert("Empate");
            limpar();
        }else{
            jogador = jogador === "X" ? "O" : "X";
        }
    }
}
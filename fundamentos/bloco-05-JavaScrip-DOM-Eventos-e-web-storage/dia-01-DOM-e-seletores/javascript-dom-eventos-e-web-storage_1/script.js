function textoParagrafo () {
    let centerContent = document.getElementsByTagName('p')[1];
    centerContent.innerText = "Ganhar acima de R$ 3500,00 por mês.";    
}

textoParagrafo();


function quadradoVerde () {
    let mainContent = document.getElementsByClassName('main-content')[0];
    mainContent.style.background = 'rgb(76,164,109)';
}

quadradoVerde();

function quadradoBranco () {
    let centerContentQuadrado = document.getElementsByClassName('center-content')[0];
    centerContentQuadrado.style.background = 'white';
}

quadradoBranco();

function correcao () {
    let corrgir = document.getElementsByClassName('title')[0];
    corrgir.innerText = 'Exercício 5.1 - JavaEscript';
}

correcao();
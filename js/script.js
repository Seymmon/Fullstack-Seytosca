window.onload = function(){
    document.querySelector(".detalhesTurma").style.display ='none'
}

function mostrardetalhes(){
    if(document.querySelector(".detalhesTurma").style.display == 'flex'){
        document.querySelector(".detalhesTurma").style.display = 'none';
        console.log("none")
    } else { 
        document.querySelector(".detalhesTurma").style.display = 'flex';
        console.log("flex")
    }
console.log("teste")
}
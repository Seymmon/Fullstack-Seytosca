let dadosTeste = [
    {
        nome: 'Nome',
        matric: 'Matric',
        av1: 'AV1',
        av2:'AV2',
        trabalho:'TRABALHO',
        final:'FINAL',
        saiba:'SAIBA MAIS'
    },
    {
        nome: 'seymmon',
        matric: '592593',
        av1: '10',
        av2:'8',
        trabalho:'8',
        final:'9',
        saiba:'SAIBA MAIS'
    },
    {
        nome: 'ryan da zl',
        matric: '592594',
        av1: '8',
        av2:'9',
        trabalho:'10',
        final:'9',
        saiba:'SAIBA MAIS'
    },
    {
        nome: 'matheus toscano',
        matric: '592595',
        av1: '8',
        av2:'9',
        trabalho:'10',
        final:'9',
        saiba:'SAIBA MAIS'
    },
    {
        nome: 'Mario',
        matric: '592596',
        av1: '10',
        av2:'8',
        trabalho:'8',
        final:'9',
        saiba:'SAIBA MAIS'
    },
    {
        nome: 'Maycon',
        matric: '592597',
        av1: '10',
        av2:'8',
        trabalho:'8',
        final:'9',
        saiba:'SAIBA MAIS'
    }
]

function clickturma(){
    if(document.querySelector(".detalhesTurma").style.display == 'flex'){
        mostrarDestalhes();
    } else { 
        esconderDetalhes();
    }
}
function mostrarDestalhes(){
    document.querySelector(".detalhesTurma").style.display = 'none';
}
function esconderDetalhes(){
    document.querySelector(".detalhesTurma").style.display = 'flex';
}
function criarDivs(){
    var divConteudo = document.querySelector(".detalhesTurma");

    var divConteudoNome = document.createElement('div')
    divConteudoNome.classList.add('divNome');
    divConteudo.appendChild(divConteudoNome)

    var divConteudoMatric = document.createElement('div')
    divConteudoMatric.classList.add('divMatric');
    divConteudo.appendChild(divConteudoMatric)

    var divConteudoAv1 = document.createElement('div')
    divConteudoAv1.classList.add('divAv1');
    divConteudo.appendChild(divConteudoAv1)

    var divConteudoAv2 = document.createElement('div')
    divConteudoAv2.classList.add('divAv2');
    divConteudo.appendChild(divConteudoAv2)

    var divConteudoTrabalho = document.createElement('div')
    divConteudoTrabalho.classList.add('divTrabalho');
    divConteudo.appendChild(divConteudoTrabalho)

    var divConteudoFinal = document.createElement('div')
    divConteudoFinal.classList.add('divFinal');
    divConteudo.appendChild(divConteudoFinal)

    var divConteudoSaiba = document.createElement('div')
    divConteudoSaiba.classList.add('divSaiba');
    divConteudo.appendChild(divConteudoSaiba)

    for(var i = 0; i < dadosTeste.length; i++){
        var divNome = document.createElement('div')
        divNome.classList.add('nome');
        divNome.innerHTML = dadosTeste[i].nome.toUpperCase()
        divConteudoNome.appendChild(divNome)
    }
    for(var i = 0; i < dadosTeste.length; i++){
        var divMatric = document.createElement('div')
        divMatric.classList.add('matric');
        divMatric.innerHTML = dadosTeste[i].matric.toUpperCase()
        divConteudoMatric.appendChild(divMatric)
    }
    for(var i = 0; i < dadosTeste.length; i++){
        var divAv1 = document.createElement('div')
        divAv1.classList.add('av');
        divAv1.innerHTML = dadosTeste[i].av1.toUpperCase()
        divConteudoAv1.appendChild(divAv1)
    }
    for(var i = 0; i < dadosTeste.length; i++){
        var divAv2 = document.createElement('div')
        divAv2.classList.add('av');
        divAv2.innerHTML = dadosTeste[i].av2.toUpperCase()
        divConteudoAv2.appendChild(divAv2)
    }
    for(var i = 0; i < dadosTeste.length; i++){
        var divTrabalho = document.createElement('div')
        divTrabalho.classList.add('trabalho');
        divTrabalho.innerHTML = dadosTeste[i].trabalho.toUpperCase()
        divConteudoTrabalho.appendChild(divTrabalho)
    }
    for(var i = 0; i < dadosTeste.length; i++){
        var divFinal = document.createElement('div')
        divFinal.classList.add('final');
        divFinal.innerHTML = dadosTeste[i].final.toUpperCase()
        divConteudoFinal.appendChild(divFinal)
    }
    for(var i = 0; i < dadosTeste.length; i++){
        var divSaiba = document.createElement('div')
        divSaiba.classList.add('saiba');
        divSaiba.innerHTML = dadosTeste[i].saiba.toUpperCase()
        divConteudoSaiba.appendChild(divSaiba)
    }        
/*     for(var n = 0; n < 7; i++){
        var divInformacoes = document.createElement('div')
        divInformacoes.classList.add('quadroInformacoes')
        divFilhoAluno.appendChild(divInformacoes)
    } */
}
console.log(dadosTeste[0].nome)

criarDivs();

function mostrarAlunos(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => console.log(data))
}
mostrarAlunos()

let dadosTeste = [
    {
        nome: 'seymmon',
        matric: '592593',
        av1: '10',
        av2:'8',
        trabalho:'8',
        final:'9',
        saiba:'<a href="">INFO</a>'
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

async function mostrarAlunos(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    jsonObject = await response.json();
    teste(jsonObject)
}
function teste(s){
     console.log(s)
     criarDivs(s)
}

function clickturma(){
    if(document.querySelector(".detalhesTurma").style.display == 'flex'){
        esconderDetalhes();
    } else { 
        mostrarDestalhes();
    }
}
function esconderDetalhes(){
    document.querySelector(".detalhesTurma").style.display = 'none';
}
function mostrarDestalhes(){
    document.querySelector(".detalhesTurma").style.display = 'flex';
}
function criarDivs(s){
    var divConteudo = document.querySelector(".detalhesTurma");

    var divConteudoNome = document.createElement('div')
    divConteudoNome.classList.add('divNome');
    divConteudo.appendChild(divConteudoNome)
    var divNomeTitulo = document.createElement('div')
    divNomeTitulo.innerHTML = 'Nome'
    divNomeTitulo.classList.add('nome');
    divConteudoNome.appendChild(divNomeTitulo)

    var divConteudoMatric = document.createElement('div')
    divConteudoMatric.classList.add('divMatric');
    divConteudo.appendChild(divConteudoMatric)
    var divMatricTitulo = document.createElement('div')
    divMatricTitulo.innerHTML = 'Matric'
    divMatricTitulo.classList.add('matric');
    divConteudoMatric.appendChild(divMatricTitulo)

    var divConteudoAv1 = document.createElement('div')
    divConteudoAv1.classList.add('divAv1');
    divConteudo.appendChild(divConteudoAv1)
    var divAv1Titulo = document.createElement('div')
    divAv1Titulo.innerHTML = 'AV1'
    divAv1Titulo.classList.add('av')
    divConteudoAv1.appendChild(divAv1Titulo)

    var divConteudoAv2 = document.createElement('div')
    divConteudoAv2.classList.add('divAv2');
    divConteudo.appendChild(divConteudoAv2)
    var divAv2Titulo = document.createElement('div')
    divAv2Titulo.innerHTML = 'AV2'
    divAv2Titulo.classList.add('av')
    divConteudoAv2.appendChild(divAv2Titulo)

    var divConteudoTrabalho = document.createElement('div')
    divConteudoTrabalho.classList.add('divTrabalho');
    divConteudo.appendChild(divConteudoTrabalho)
    var divTrabalhoTitulo = document.createElement('div')
    divTrabalhoTitulo.innerHTML = 'Trabalho'
    divTrabalhoTitulo.classList.add('trabalho')
    divConteudoTrabalho.appendChild(divTrabalhoTitulo)

    var divConteudoFinal = document.createElement('div')
    divConteudoFinal.classList.add('divFinal');
    divConteudo.appendChild(divConteudoFinal)
    var divFinalTitulo = document.createElement('div')
    divFinalTitulo.innerHTML = 'NT Final'
    divFinalTitulo.classList.add('final')
    divConteudoFinal.appendChild(divFinalTitulo)

    var divConteudoSaiba = document.createElement('div')
    divConteudoSaiba.classList.add('divSaiba');
    divConteudo.appendChild(divConteudoSaiba)
    var divSaibalTitulo = document.createElement('div')
    divSaibalTitulo.innerHTML = 'Saiba Mais'
    divSaibalTitulo.classList.add('saibaMais')
    divConteudoSaiba.appendChild(divSaibalTitulo)


    for(var i = 0; i < dadosTeste.length; i++){
        var divNome = document.createElement('div')
        divNome.classList.add('nome');
        divNome.innerHTML = s[i].name.toUpperCase()
        divConteudoNome.appendChild(divNome)
    }
    for(var i = 0; i < dadosTeste.length; i++){
        var divMatric = document.createElement('div')
        divMatric.classList.add('matric');
        divMatric.innerHTML = s[i].id
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
        divSaiba.innerHTML = "<a href='paginaAluno.html?id="+ s[i].id +"'>INFO</a>"
        divConteudoSaiba.appendChild(divSaiba)
    }        
}

mostrarAlunos()


/* async function mostrarAlunos(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
} */












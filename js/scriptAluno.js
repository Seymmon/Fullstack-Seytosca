var resultId;
var divNome = document.querySelector('.alunoNome')
var divMatric = document.querySelector('.alunoMatric')
var divTelefone = document.querySelector('.alunoTelefone')
var divCpf = document.querySelector('.alunoCpf')
var divNasc = document.querySelector('.alunoNasc')
var divEnd = document.querySelector('.alunoEnd')
var divCampus = document.querySelector('.alunoCampus')
var divDesde = document.querySelector('.alunoDesde')
var divCurso = document.querySelector('.alunoCurso')
var divSituacao = document.querySelector('.alunoSituação')

function mostrarId(){
    var urlResponse = window.location.search;
    var obj = new URLSearchParams(urlResponse);
    resultId = obj.get("id");
    console.log(resultId)
}
mostrarId()

async function mostrarAlunos(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    jsonObject = await response.json();
    trocarInfo(jsonObject)
}
mostrarAlunos()
function trocarInfo(o){
    console.log(o[resultId].address.street)
    console.log(o[resultId])
    divNome.innerHTML = 'Nome: '+  o[resultId].name;
    divMatric.innerHTML = 'Matric: '+  o[resultId].id;
    divTelefone.innerHTML = 'TEL: '+  o[resultId].phone;
    divCpf.innerHTML = 'CPF: '+  o[resultId].phone;
    // divNasc.innerHTML = 'Nasc: '+  o[resultId].phone;
    divEnd.innerHTML = 'End: '+ o[resultId].address.street + ' - ' + o[resultId].address.city;
}
trocarInfo();

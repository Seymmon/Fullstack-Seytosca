var alunos = {
     idStudent : null,
     studentName: '' ,
     birthDate: '' ,
     cpf: '' ,
     addres: '', 
     campus: '' ,
     phone: '' ,
     dateOfEntry: '' ,
     studentStatus: '', 
     course : {
         courseName : ''
    },
     studentClass : {
         idClass : 3
    }
}

function receberAluno(){
    var nome = document.querySelector('#nome').value
    var tel = document.querySelector('#tel').value
    var cpf = document.querySelector('#cpf').value
    var nasc = document.querySelector('#nasc').value
    var end = document.querySelector('#end').value
    var campus = document.querySelector('#campus').value
    var desde = document.querySelector('#desde').value
    var curso = document.querySelector('#curso').value
    var situacao = document.querySelector('#situacao').value
    alunos.studentName = nome
    alunos.birthDate = nasc
    alunos.cpf = cpf
    alunos.addres = end
    alunos.campus = campus
    alunos.phone = tel
    alunos.dateOfEntry = desde
    alunos.studentStatus = situacao
    alunos.course.courseName = curso
    console.log(alunos.studentName) 
    console.log(alunos) 
    inserirPost()
}

async function inserirPost(){

    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(alunos),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await req.json();
    let objetoComentado = JSON.stringify(alunos)
    console.log(objetoComentado)
}

console.log(alunos)
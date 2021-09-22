document.getElementById('q3').innerHTML = `
<h2>Questão 3</h2>
<button onClick='onClickQ3()'>Criar Relatório</button>
<h3 id='tituloRel'></h3>
<div id='resultadoQ3'></div>
<p id='relatorioQ3'></p>
<hr/>
`

function onClickQ3() {
  console.log("Executando a questão 3:")
  criarRelatorio()
}

function criarRelatorio(){

  function Aluno(_nr, _nota) {
    const nr = Symbol()
    const nota = Symbol()
    this.nr = _nr
    this.nota = _nota
  }

  var i = 1;
  var alunos = [];
  var ap = 0;
  var rp = 0;
  
  while (i <= 20) {
    let rand = (Math.random() * 100).toFixed(2)
    let newAluno = new Aluno()
    
    Object.defineProperties(newAluno,
      {
        'getNr': { get: function() { return this.nr } },
        'getNota': { get: function() { return this.nota } },
        'setNr': { set: function(nr) { this.nr = nr } },
        'setNota': { set: function(nota) { this.nota = nota } }
      }
    );

    newAluno.setNr = i
    newAluno.setNota = rand

    if (newAluno.nota >= 50) {
      newAluno.situacao = "APROVADO"
      ap++
    } else {
      newAluno.situacao = "REPROVADO"
      rp++
    }

    console.log(newAluno)
    alunos.push(newAluno)
    i++
  }

  document.getElementById('tituloRel').innerHTML = 'Relatório de Alunos'
 
  let resultado = document.getElementById('resultadoQ3')
  resultado.innerHTML = ""

  for (aluno of alunos) {
    let entryAluno = document.createElement('p')
    entryAluno.innerText = `Aluno nr ${aluno.getNr} - Nota ${aluno.nota} [${aluno.situacao}]`
    resultado.appendChild(entryAluno)
  }

  let relatorio = `
  <strong>Estatística:</strong>
  <p>APROVADOS: ${ap} (${ap*5}%) | REPROVADOS: ${rp} (${rp*5}%)</p>
  `
  
  document.getElementById('relatorioQ3').innerHTML = relatorio
}
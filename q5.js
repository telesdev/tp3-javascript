document.getElementById('q5').innerHTML = `
<h2>Questão 5</h2>
<div>
    <label for='ladoA'>Lado A</label>
    <input type="number" name='ladoA' id='ladoA'/>
</div>
<div>
    <label for='ladoB'>Lado B</label>
    <input type="number" name='ladoB' id='ladoB'/>
</div>
<div>
    <label for='ladoC'>Lado C</label>
    <input type="number" name='ladoC' id='ladoC'/>
</div>
<button onClick='onClickQ5()'>Calcular</button>
<h3>Resposta:</h3>
<p id='respostaQ5'></p>
<hr/>
`

function onClickQ5() {
  console.log("Executando a questão 5:")

  let ladoA = parseInt(document.getElementById('ladoA').value)
  let ladoB = parseInt(document.getElementById('ladoB').value)
  let ladoC = parseInt(document.getElementById('ladoC').value)

  if (!ladoA || ladoA <= 0)
    return window.alert('Lado A não pode estar vazio ou ser menor ou igual a 0.')
  else if (!ladoB || ladoB <= 0)
    return window.alert('Lado B não pode estar vazio ou ser menor ou igual a 0.')
  else if (!ladoC || ladoC <= 0)
    return window.alert('Lado C não pode estar vazio ou ser menor ou igual a 0.')

  let resultado = triangulo(ladoA, ladoB, ladoC)
  
  document.getElementById('respostaQ5').innerHTML = resultado
}

let triangulo = (x, y, z) => {
  if (x == y && y == z) {
    return "Triângulo Equilátero"
  } else if ((x == y && y != z) || (y == z && z != x) || (x == z && z != y)) {
    return "Triângulo Isósceles"
  } else {
    return "Triângulo Escaleno"
  }
}
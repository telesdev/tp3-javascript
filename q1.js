document.getElementById('q1').innerHTML = `
<h2>Questão 1</h2>
<div>
    <label for='min'>Valor Mínimo</label>
    <input type="number" name='min' id='min'/>
</div>
<div>
    <label for='max'>Valor Máximo</label>
    <input type="number" name='max' id='max'/>
</div>
<button onClick='onClickQ1()'>Calcular</button>
<h3>Resposta:</h3>
<p id='respostaQ1'></p>
<hr/>
`


function onClickQ1() {
  console.log("Executando a questão 1:")
  
  let min = parseInt(document.getElementById('min').value)
  let max = parseInt(document.getElementById('max').value)
  
  if (!min && min != 0)
    return window.alert('Valor mínimo não pode estar vazio.')
  else if (!max && max != 0)
    return window.alert('Valor máximo não pode estar vazio.')
  else if (min >= max)
    return window.alert('Valor mínimo deverá ser menor que o valor máximo.')
  
  let resultado = entreMinMax(min, max)

  if (resultado.length == 0) 
    resultado = "Não existem números múltiplos de 2 e 3 (ao mesmo tempo) no intervalo digitado."

  document.getElementById('respostaQ1').innerHTML = resultado;
}

function entreMinMax(min, max) {
  let i = min+1;
  let arr = [];

  while (i < max) {
    if (i%2 == 0 && i%3 == 0){
      arr.push(i)
    }
    i++
  }
  return arr
}
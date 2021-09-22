document.getElementById('q4').innerHTML = `
<h2>Questão 4</h2>
<div>
    <label for='qtdNum'>Quantidade de números</label>
    <input type="number" name='qtdNum' id='qtdNum'/>
</div>
<div>
    <label for='vMin'>Valor Mínimo</label>
    <input type="number" name='vMin' id='vMin'/>
</div>
<div>
    <label for='vMax'>Valor Máximo</label>
    <input type="number" name='vMax' id='vMax'/>
</div>
<button onClick='onClickQ4()'>Calcular</button>
<h3>Resposta:</h3>
<p id='respostaQ4'></p>
<hr/>
`

function onClickQ4() {
  console.log("Executando a questão 4:")

  let qtdNum = parseInt(document.getElementById('qtdNum').value)
  let vMin = parseInt(document.getElementById('vMin').value)
  let vMax = parseInt(document.getElementById('vMax').value)

  if (!qtdNum || qtdNum <= 0)
    return window.alert('Quantidade de números não pode estar vazio ou ser menor ou igual a 0.')
  else if (!vMin && vMin != 0)
    return window.alert('Valor mínimo não pode estar vazio.')
  else if (!vMax && vMax != 0)
    return window.alert('Valor máximo não pode estar vazio.')
  else if (vMin >= vMax)
    return window.alert('Valor mínimo deverá ser menor que o valor máximo.')
  else if (qtdNum - 1 > vMax - vMin)
    return window.alert(`Quantidade de número deve estar entre 1 e ${vMax - vMin + 1}.`)
  
  let resultado = randNum(qtdNum, vMin, vMax)
  
  document.getElementById('respostaQ4').innerHTML = resultado;
}


function randNum(qtdNum, vMin, vMax){
  let arr = []
  let i = 0;

  while(i < qtdNum) {
    let num = Math.round((Math.random() * (vMax-vMin)) + vMin)
    if (arr.includes(num))
      continue;
    arr.push(num)
    i++
  }
  arr = arr.sort((a, b) => a - b)
  return arr
}
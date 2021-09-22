document.getElementById('q2').innerHTML = `
<h2>Questão 2</h2>
<div>
  <label for='fatorial'>Calcular o fatorial de</label>
  <input type='number' name='fatorial' id='fatorial' />
</div>
<button onClick='onClickQ2()'>Calcular</button>
<h3>Resposta:</h3>
<p id='respostaQ2'></p>
<hr/>
`

function onClickQ2() {
  console.log("Executando a questão 2:")
  
  let fat = parseInt(document.getElementById('fatorial').value)
  
  if (!fat && fat != 0)
    return window.alert('Número não pode estar vazio.')
  else if (fat < 0)
    return window.alert('Número deverá ser igual ou maior que 0')
  
  let inicio = new Date()
  let resultado = calculaFatorial(fat)
  let fim = new Date()

  var tempo = fim.getTime() - inicio.getTime()

  document.getElementById('respostaQ2').innerHTML = `${fat}! = ${resultado} (${tempo} milissegundos)`;
}

function calculaFatorial(fat){
  let res = 1;
  let i = 1;

  if (fat == 0 || fat == 1)
    return 1
  else {
    while (i < fat) {
      res += res * (fat-i)
      i++
    }
  }
  return res
}
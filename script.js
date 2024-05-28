const num = document.querySelector('#txtn')
const tab = document.querySelector('#seltab')
const button = document.querySelector('#button')

function tabuada(){
  if(num.value.length == 0){
    alert('por favor digite um número')
  }else {
    let numero = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while(c <= 10){
      let item = document.createElement('option')
      item.text = `${numero} X ${c} = ${numero * c}`
      //AppendChild -> Adiciona ao final da lista
      tab.append(item)
      c++
    }
  }
}


button.addEventListener('click', tabuada)






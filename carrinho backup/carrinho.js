var carrinhoVisivel = false;

if(document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded',ready)
}else{
  ready();
}

function ready(){
  var btnEliminarItem = document.getElementsByClassName('btn-eliminar');
  for(var i=0; i < btnEliminarItem.length;i++){
    var button = btnEliminarItem[i];
    button.addEventListener('click', eliminarItemCarrinho);
  }
}

function eliminarItemCarrinho(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();

  atualizarTotalCarrinho();
}

function atualizarTotalCarrinho(){
  var carrinhoConteudo = document.getElementsByClassName('carrinho')[0];
  var carrinhoItens = carrinhoConteudo.getElementsByClassName('item-carrinho');
  var total = 0;

  for(var i=0; i < carrinhoItens.length;i++){
    var item = carrinhoItens[i];
    var preçoElemento = item.getElementsByClassName('carrinho-item-preço')[0];
    console.log(preçoElemento);

    var preço = parseFloat(preçoElemento.innerText.replace('$','').replace('.',''));
    console.log(preço);
    var qntdItem = item.getElementsByClassName('carrinho-item-qntd')[0];
    var qntd  = qntdItem.value;
    console.log(qntd);
    total = total + (preço * qntd);
  }
  total = Math.round(total*100)/100;
  document.getElementsByClassName('carrinho-preço-total')[0].innerText = '$' + total.toLocaleString("es") + ',00';
}
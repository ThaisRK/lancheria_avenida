//Referências aos elementos da página que terão seu comportamento monitorado pelo javascript

var rbbauru = document.getElementById("rbbauru");
var rbtorrada = document.getElementById("rbtorrada");
var rbcachorro = document.getElementById("rbcachorro");
// Id do espaço reservado para a imagem do lanche selecionado. 
// Esse espaço poderá receber a imagem do cachorro, do bauro ou da torrada
var imgLanche = document.getElementById("imgLanche");

var ckbatata = document.getElementById("ckbatata");
var ckcebola = document.getElementById("ckcebola");
// Id do espaço reservado para as imagens dos adicionais
// Esse espaço poderá receber a imagem da batata e/ou da cebola
var imgAdicionais1 = document.getElementById("imgAdicionais1");
var imgAdicionais2 = document.getElementById("imgAdicionais2");

var rbrefri = document.getElementById("rbrefri");
var rbagua = document.getElementById("rbagua");
var rbsuco = document.getElementById("rbsuco");
// Id do espaço reservado para a imagem da bebida
// Esse espaço poderá receber a imagem do refri, do suco ou da água
var imgBebida = document.getElementById("imgBebida");

var outPreco = document.getElementById("outPreco");
var btMostrar = document.getElementById("btMostrar");
var btConcluir = document.getElementById("btConcluir");

//Valores para cada item selecionado do cardápio
//Assim que o cliente clica em "refri", por exemplo, o valor do refri aparecerá abaixo do formulário
//Para informar o cliente sobre o valor do produto, e assim sucessivamente
//Obs: o cliente nunca poderá escolher duas variedades do mesmo item.
var outPrecoBebida = document.getElementById("outPrecoBebida");
var outPrecoAdicional = document.getElementById("outPrecoAdicional");
var outPrecoLanche = document.getElementById("outPrecoLanche");

//variáveis globais para o preço do lanche que pode ser acessada em qualquer função
var preco = 0
var precoBebida = 0
var precoLanche = 20
var precoAdicional = 0
var precoBatata = 0
var precoCebola = 0


//limpar checkbox ao carregar a página
window.addEventListener("load", limparCampos)
function limparCampos() {
    ckbatata.checked = false;
    ckcebola.checked = false;
}

//Cada item que o cliente seleciona retorna o valor do item.
//As imagens estão sendo atribuídas às ids referentes e reservadas na div oculta até que seja feito 
//o clique no botão "Mostrar Pedido"
//O if soma o valor e o else o diminui
function somarLanche() {
    if (rbbauru.checked) {
        imgLanche.src = 'img/bauru.png'
        precoLanche = 20
    } else if (rbtorrada.checked) {
        imgLanche.src = 'img/torrada.png'
        precoLanche = 10
    } else if (rbcachorro.checked) {
        imgLanche.src = 'img/cachorro.png'
        precoLanche = 12
    }
    //retorna o valor do lanche(pão, bauru ou torrada) selecionado
    outPrecoLanche.textContent = "R$ " + precoLanche
}

//se o cliente desmarca algum dos adicionais (else) o espaço da imagem fica em braco
function somarBatata() {
    if (ckbatata.checked) {
        imgAdicionais1.src = 'img/batata.png'
        precoBatata = precoBatata + 10
    } else {
        precoBatata -= 10
        imgAdicionais1.src = ""
    }
    precoAdicional = (precoCebola + precoBatata)
    outPrecoAdicional.textContent = "R$ " + precoAdicional
}

function somarCebola() {
    if (ckcebola.checked) {
        imgAdicionais2.src = 'img/cebola.png'
        precoCebola = precoCebola + 12
    } else {
        precoCebola -= 12
        imgAdicionais2.src = ""
    }
    precoAdicional = (precoCebola + precoBatata)
    outPrecoAdicional.textContent = "R$ " + precoAdicional
}

function somarBebida() {
    if (rbrefri.checked) {
        imgBebida.src = 'img/refri.png'
        precoBebida = 5
    }
    if (rbagua.checked) {
        imgBebida.src = 'img/agua.png'
        precoBebida = 2
    }
    if (rbsuco.checked) {
        imgBebida.src = 'img/suco.png'
        precoBebida = 3
    }
    outPrecoBebida.textContent = "R$ " + precoBebida
}

//Função que exibe (display-inline) a div oculta através do clie no botão "Mostrar Pedido" 
//e atribui o valor total formatado
function exibirPreco() {
    pedidoOculto.className = "d-inline"
    preco = (precoLanche + precoAdicional + precoBebida)
    outPreco.textContent = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function concluirPedido() {
    pedidoOculto.className = "d-none"
    endereco.className = "d-inline"
    
}


//criar 'ouvientes' de evento para os elementos da página que quando ocorrem chamam uma função
btMostrar.addEventListener('click', exibirPreco);
btConcluir.addEventListener('click', concluirPedido)

rbbauru.addEventListener('change', somarLanche);
rbcachorro.addEventListener('change', somarLanche);
rbtorrada.addEventListener('change', somarLanche);

rbrefri.addEventListener('change', somarBebida);
rbagua.addEventListener('change', somarBebida);
rbsuco.addEventListener('change', somarBebida);

ckbatata.addEventListener('change', somarBatata)
ckcebola.addEventListener('change', somarCebola)
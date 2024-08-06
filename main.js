
const btnAdicionar = document.getElementById('add-button') //Cria uma váriavel constante, que captura os elementos com ID add-button
btnAdicionar.addEventListener('click', adicionarItemNaLista) //Adiciona um evento para a constante que foi criada, o evento é click e chama uma função chamada (adicionarItemNaLista) 


function btnFechar(){
    var meusItens = document.getElementsByTagName('li') //Cria uma váriavel chamada meusItens, que caputra a tag li
    var i; //Inicia um contador
    for (i=0; i<meusItens.length; i++){ //Cria um for que verifica a quantidade de 'li's no documento
        var span = document.createElement('span') //Cria uma  tag span
        var btnX = document.createTextNode('\u00D7') //Cria um simbolo de X 
        span.className = "close" //Cria uma classe via JavaScript chamada "close"
        span.appendChild(btnX) //Adiciona um filho ao span
        meusItens[i].appendChild(span) //adiciona um filho na posição "vazia" da lista
    }

    var close = document.getElementsByClassName("close"); //Cria uma váriavel, que captura os elementos da classe "close"
    for (i=0; i< close.length; i++){ //enquanto i for menor que a quantidade de itens close, faça
        close[i].onclick = function (){ //pega a posição atual do array e chama o evento onclick (quando o elemento obter a ação do click, execute a função anonima) 
            var div = this.parentElement; //cria uma váriavel que recebe a sí mesmo como elemento
            div.style.display = 'none' //altera o display do item atual para 'none', nenhum
        }
    }
}

btnFechar()

const meuItemSelecionado = document.getElementById('minha-lista')//seleciona os elementos ul
meuItemSelecionado.addEventListener('click', function(selecionado){ //aciona ouvinte de eventos e executa uma função por parametro
    if(selecionado.target.tagName === 'LI'){ //obtem o elemento li
        selecionado.target.classList.toggle('checked') // altera o estado para checked
    }
}, false)



function adicionarItemNaLista (){
    var meuItem = document.createElement('li') //Criando meu Li
    var meuConteudoItem = document.getElementById('info-note').value //Capturando string lançado no Input
    var novoItemNaLista = document.createTextNode(meuConteudoItem) //Criando texto dinamico 
    meuItem.appendChild(novoItemNaLista) //Criando meu Li e adicionando seu conteúdo

    //Verificando se o campo Input foi preenchido
    if(meuConteudoItem === ''){
        alert('Preencha os campos !') //Caso vazio, alert na tela !
    }

    else{
        var minhaUl = document.getElementById('minha-lista')
        minhaUl.appendChild(meuItem) //Caso preenchido, adicione o elemento Li na minha lista Ul
    }    
    document.getElementById('info-note').value = '' //Limpa o campo anterior

    btnFechar()
}
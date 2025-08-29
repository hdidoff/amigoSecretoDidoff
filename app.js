let amigos = [];
const inputAmigo=document.getElementById('amigo');
const btnAdicionar=document.getElementById('btnAdicionar');
const listaAmigosU1=document.getElementById('listaAmigos');
const btnSortear=document.getElementById('btnSortear');
const resultadoU1=document.getElementById('resultado');



function adicionarAmigo(){
    let nome=inputAmigo.value.trim();
    if (nome===""){
        alert('Por favor insira um nome!');
        return;
    }
    if (amigos.includes(nome)){
        alert('Esse nome já foi adicionado a lista! Adicione um nome diferente.')
        inputAmigo.value='';
        inputAmigo.focus();
        return;
    } 
    amigos.push(nome);
    console.log("Array de amigos atualizado:", amigos);
    const novoItemLista=document.createElement('li');
    novoItemLista.textContent=nome;
    listaAmigosU1.appendChild(novoItemLista);
    inputAmigo.value='';
    inputAmigo.focus();    
}
    
btnAdicionar.addEventListener('click',adicionarAmigo);
inputAmigo.addEventListener('keydown',function(evt){
    if (evt.key==='Enter'){
        adicionarAmigo();
    }
});

function sortearAmigo() {
    if (amigos.length < 2){
        alert("Adicione pelo menos 2 nomes para realizar o sorteio!");
        return;       
    }
    const indiceSorteado = Math.floor(Math.random()* amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    console.log('Botão sortear clicado!');
    console.log("Amigo sorteado:",amigoSorteado);
    resultadoU1.textContent = `O amigo secreto sorteado é:${amigoSorteado}`;
    
    }
    
    btnSortear.addEventListener('click',sortearAmigo);
    
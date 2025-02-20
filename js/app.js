let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    listaAmigos.push(nomeAmigo);
    lista.textContent = listaAmigos.join(', ');
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if(listaAmigos.length <= 1) {
        alert('Adicione mais amigos para sortear!');
        return;
    }

    listaAmigos.sort(() => Math.random() - 0.5);
    console.log(listaAmigos.join(', '));

    let listaSorteio = document.getElementById('lista-sorteio');

    listaAmigos.forEach((amigo, index) => {
        let item = document.createElement('p');
        if(index == listaAmigos.length - 1) {
            item.textContent = `${amigo} -> ${listaAmigos[0]}`;
            listaSorteio.appendChild(item);
            return;
        }
        item.textContent = `${amigo} -> ${listaAmigos[index + 1]}`;
        listaSorteio.appendChild(item);
    });
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
}
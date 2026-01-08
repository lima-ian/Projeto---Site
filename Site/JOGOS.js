displayWelcomeMessage();


function displayWelcomeMessage() {
    alert("Bem-vindos à nossa seção de jogos!");
}

function mostrarMensagemCompra()
{
    const mensagem = document.createElement('p');
    mensagem.textContent = "Compra finalizada com sucesso! Obrigado pela sua compra";
   
    document.getElementById('mensagem').appendChild(mensagem);
}
document.getElementById('btnComprar').addEventListener('click', mostrarMensagemCompra);
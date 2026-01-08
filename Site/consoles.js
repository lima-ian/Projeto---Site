document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    showSlides();
    displayWelcomeMessage();

    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        if (slides.length === 0) return;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }

    function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("slide").length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = document.getElementsByClassName("slide").length}
    showSlides();
   }
    function filterConsoles() {
        const filterValue = document.getElementById('console-filter').value;
        const consoleItems = document.querySelectorAll('.console-item');

        consoleItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'list-item';
            } else if (item.classList.contains(filterValue)) {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    }
    function displayWelcomeMessage() {
        alert("Bem-vindos à nossa seção de consoles!");
    }

    const comprarButton = document.getElementById('comprarButton');
    
    if (comprarButton) {
        comprarButton.addEventListener('click', () => {
            const modelo = document.getElementById('modelo').value;
            const productName = document.title;
            let precoVista, precoCartao, imagemProduto;

            switch (productName) {
                case "Playstation 4 FAT":
                    precoVista = modelo === "500GB" ? "R$ 2.499,00" : "R$ 3.300,00";
                    precoCartao = modelo === "500GB" ? "R$ 2.699,00" : "R$ 3.500,00";
                    imagemProduto = "fat.png"; 
                    break;
                case "Playstation 4 SLIM":
                    precoVista = modelo === "500GB" ? "R$ 2.700,00" : "R$ 3.300,00";
                    precoCartao = modelo === "500GB" ? "R$ 2.900,00" : "R$ 3.500,00";
                    imagemProduto = "slim.png"; 
                    break;
                case "Playstation 4 PRO":
                    precoVista = modelo === "1TB" ? "R$ 3.200,00" : "R$ 3.900,00";
                    precoCartao = modelo === "1TB" ? "R$ 3.500,00" : "R$ 4.300,00";
                    imagemProduto = "pro.png";
                    break;
                case "Playstation 5 Digital":
                    precoVista = modelo === "800GB" ? "R$ 3.200,00" : "R$ 4.000,00";
                    precoCartao = modelo === "800GB" ? "R$ 3.600,00" : "R$ 4.300,00";
                    imagemProduto = "ps5.png"; 
                    break;
                case "Playstation 5 Standard":
                    precoVista = modelo === "800GB" ? "R$ 3.500,00" : "R$ 3.900,00";
                    precoCartao = modelo === "800GB" ? "R$ 3.700,00" : "R$ 4.200,00";
                    imagemProduto = "ps5s.png"; 
                    break;
                case "Xbox Series X":
                    precoVista = modelo === "512GB" ? "R$ 4.299,00" : "R$ 4.600,00";
                    precoCartao = modelo === "512GB" ? "R$ 4.500,00" : "R$ 4.800,00";
                    imagemProduto = "xxx.png"; 
                    break;
                case "Xbox Series S":
                    precoVista = "R$ 2.400,00";
                    precoCartao = "R$ 2.600,00";
                    imagemProduto = "xss.png"; 
                    break;
                case "Nintendo Switch /OLED 32GB 64GB Preto e Branco":
                    precoVista = "R$ 2.200,00";
                    precoCartao = "R$ 2.600,00";
                    imagemProduto = "nav.png"; 
                    break;
                case "Nintendo Switch OLED 64GB":
                    precoVista = "R$ 2.500,00";
                    precoCartao = "R$ 2.900,00";
                    imagemProduto = "nav.png"; 
                    break;
                case "Nintendo Switch NBP":
                    precoVista = "R$ 2.500,00";
                    precoCartao = "R$ 2.900,00";
                    imagemProduto = "nod.webp"; 
                    break;
                    
                default:
                    console.error("Produto não encontrado");
                    return;
            }

            window.location.href = `Compra.html?modelo=${encodeURIComponent(modelo)}&precoVista=${precoVista}&precoCartao=${precoCartao}&imagem=${encodeURIComponent(imagemProduto)}`;
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const modelo = urlParams.get('modelo');
    const precoVista = urlParams.get('precoVista');
    const precoCartao = urlParams.get('precoCartao');
    const imagem = urlParams.get('imagem');

    const detalhesCompra = document.getElementById('detalhesCompra');
    if (detalhesCompra) {
        detalhesCompra.innerHTML = `
            <h2>Modelo Selecionado: ${modelo}</h2>
            <h2>Preço à Vista: ${precoVista}</h2>
            <h2>Preço no Cartão: ${precoCartao}</h2>
            <label for="metodoPagamento">Escolha o método de pagamento:</label>
            <select id="metodoPagamento">
                <option value="avista">À Vista</option>
                <option value="cartao">Cartão</option>
            </select>
            <button id="finalizarCompraButton">Finalizar Compra</button>
            <img src="${imagem}" alt="${modelo}" style="max-width: 300px; margin-top: 20px;"/>
        `;

        const finalizarCompraButton = document.getElementById('finalizarCompraButton');
        finalizarCompraButton.addEventListener('click', () => {
            const metodoPagamento = document.getElementById('metodoPagamento').value;
            const totalCompra = metodoPagamento === "avista" ? precoVista : precoCartao;
            alert(`Valor a ser pago: ${totalCompra}`);
        });
    }
});

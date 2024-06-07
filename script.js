function changeImage () {
    const imagem = document.getElementById ('primeiraImagem');

    const currentSrc = imagem.getAttribute('src');

    if (currentSrc === 'imagens/Dom.JPEG') {
        imagem.setAttribute ('src', 'imagens/Mia.jpeg');
    }
}
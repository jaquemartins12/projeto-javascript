function changeImage () {
    const imagem = document.getElementById ('primeiraImagem');

    const currentSrc = imagem.getAttribute('src');

    if (currentSrc === 'imagens/Dom.JPEG') {
        imagem.setAttribute ('src', 'imagens/Mia.jpeg');

        imagem.setAttribute ('alt', 'Mia Toretto');
    } else {
        imagem.setAttribute ('src', "imagens/Bryan.jpeg")
    }
}

function trocarImagem () {
    const imagemDois = document.getElementById ('segundaImagem');

    const currentSrc2 = imagemDois.getAttribute ('src');

    if (currentSrc2 === 'imagens/Mia.jpeg') {
        imagemDois.setAttribute ('src', 'imagens/Bryan.jpeg');

        imagemDois.setAttribute ('alt', 'Bryan');
    } else {
        imagemDois.setAttribute ('src', 'imagens/Dom.JPEG');
    }
}

function trocarImagem3 () {
    const terceiraImagem = document.getElementById ('terceiraImagem');

    const currentSrc3 = terceiraImagem.getAttribute ('src');

    if (currentSrc3 === 'imagens/Bryan.jpeg') {
        terceiraImagem.setAttribute ('src', 'imagens/Dom.JPEG');

        terceiraImagem.setAttribute ('alt', 'Bryan');
    } else {
        terceiraImagem.setAttribute ('src', 'imagens/Mia.jpeg');
        terceiraImagem.setAttribute ('alt', 'Dom');
    }
}

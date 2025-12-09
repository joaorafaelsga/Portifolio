document.addEventListener('DOMContentLoaded', function() { 
    const imagem = document.getElementById('cachorro.jpg');
    const urlParaAbrir = 'easteregg.html'; 

    imagem.addEventListener('click', function() {
        window.open(urlParaAbrir, '_blank'); 
        
    });
});


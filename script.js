document.addEventListener('DOMContentLoaded', function() {
    const spinner = document.getElementById('spinner');
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    let rotation = 0;
    let animationId;

    function rotateSpinner() {
        rotation += 4;
        spinner.style.transform = `rotate(${rotation}deg)`;
        
        if (rotation < (900)) {  // Gira duas vezes (360 * 2)
            animationId = requestAnimationFrame(rotateSpinner);
        } else {
            // Inicia a transição para o conteúdo principal
            loading.style.opacity = '0';
            loading.style.transition = 'opacity 1s ease-out';
            
            setTimeout(function() {
                loading.style.display = 'none';
                content.style.display = 'block';
                content.style.opacity = '0';
                content.style.transition = 'opacity 1s ease-in';
                
                setTimeout(function() {
                    content.style.opacity = '1';
                }, 50);
            }, 1000);
        }
    }

    // Inicia a rotação após um pequeno atraso
    setTimeout(function() {
        rotateSpinner();
    }, 100);
});

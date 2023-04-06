const cabecalhos = document.querySelectorAll('.accordion-cabecalho');

cabecalhos.forEach(cabecalho => {
    cabecalho.addEventListener('mouseover', () => {
        cabecalho.parentElement.classList.add('active');
    });

    cabecalho.addEventListener('mouseout', () => {
        cabecalho.parentElement.classList.remove('active');
    });
})
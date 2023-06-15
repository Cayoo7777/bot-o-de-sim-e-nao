function sim(){
    alert("você aceitou oque eu pedi hehe");
}

function desvia(){

    var desviar = document.getElementById("btnnao");

        desviar.style.position = 'absolute';
        desviar.style.bottom = geraPosicao(10, 90);
        desviar.style.left = geraPosicao(10, 90);
        
    console.log('opa, desviei...');
    
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

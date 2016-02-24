var listado = [];
listado.length
function votar (nombre,ciudad,voto){
    var votoActual;
    voto=voto.toUpperCase();
    if(voto==='SI' || voto===  'NO')
    {
        ciudad = ciudad.toUpperCase();
        if(ciudad==='COCHABAMBA' || ciudad === 'LA PAZ' || ciudad === 'ORURO'|| ciudad === 'SANTA CRUZ'|| ciudad === 'CHUQUISACA'|| ciudad === 'POTOSI'|| ciudad === 'BENI'|| ciudad === 'PANDO'){
                votoActual = [window.listado.length,nombre,voto,ciudad];
                console.log(votoActual);
                listado.push(votoActual);
        } else {
            console.log('Ciudad no valida');
        }
    } else {
        console.log('Voto no Valido');
    }
}

function listadoDePersonas(listado){
    var i;
    var listaResultado = [];
    for (i = 0; i < listado.length; i++) {
        listaResultado.push(listado[i][1]);
    }
    console.log(listaResultado);
}

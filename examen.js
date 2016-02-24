var listado = [];
listado.length
function votar (nombre,ciudad,voto){
    var votoActual;
    var existe;
    var index;
    voto = voto.toUpperCase();
    nombre = nombre.toUpperCase();
    ciudad = ciudad.toUpperCase();
    existe = false;
    if(listado.length>0){
        for (index = 0 ; index<listado.length ; index++ ) {
            var arrayLocal = listado[index];
            if(arrayLocal[1]===nombre){
                    existe = true;
            }
        }
    }
    if(!existe){
        if(voto==='SI' || voto===  'NO')
        {

            if(ciudad==='TARIJA' || ciudad==='COCHABAMBA' || ciudad === 'LA PAZ' || ciudad === 'ORURO'|| ciudad === 'SANTA CRUZ'|| ciudad === 'CHUQUISACA'|| ciudad === 'POTOSI'|| ciudad === 'BENI'|| ciudad === 'PANDO'){
                    votoActual = [window.listado.length,nombre,voto,ciudad];
                    console.log(votoActual);
                    listado.push(votoActual);
            } else {
                console.log('Ciudad no valida');
            }
        } else {
            console.log('Voto no Valido');
        }
    } else {
        console.log("Que ya no puede votar denuevo");
    }
}

function listadoDePersonas(){
    var i;
    var listaResultado = [];
    for (i = 0; i < listado.length; i++) {
        listaResultado.push(listado[i][1]);
    }
    console.log(listaResultado);
}

function cantidadVotosPorCiudad(){
    var ciudades=['TARIJA','COCHABAMBA','LA PAZ','ORURO','SANTA CRUZ','CHUQUISACA','POTOSI','BENI','PANDO'];
    var index;
    for(index = 0; index<ciudades.length ; index++ ){
        var si=0;
        var no = 0;
        var i;
        for (i = 0; i < listado.length; i++) {
            var votoActual = listado[i];
            if(votoActual[3]===ciudades[index]){
                if(votoActual[2]==='SI'){
                    si++;
                }else {
                    no++;
                }
            }
        }
        if(si>no){
        console.log(ciudades[index]+'Total si: '+si +' Total no: '+no+' GANA EL SI' );
        }else {
        console.log(ciudades[index]+' Total si: '+si +' Total no: '+no+' GANA EL NO');
        }
    }
}

function cantidadDeVotos(){
    var i;
    var totalVotosSi = 0;
    var totalVotosNo = 0;
    var resultado = [];
    for (i = 0; i < listado.length; i++) {
        if (listado[i][2] === 'SI') {
          totalVotosSi ++;
        }
        if (listado[i][2] === 'NO') {
          totalVotosNo ++;
        }
    }
    console.log('Total Votos por el SI: ' + totalVotosSi + '  -------  Total votos por el NO: ' + totalVotosNo);
}

(function ejemplo(nombre, ciudad, voto){
    votar(nombre, ciudad,voto);
    listadoDePersonas();
    cantidadVotosPorCiudad();
    cantidadDeVotos();

})('Jose','cochabamba','si');

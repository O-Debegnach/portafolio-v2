var Loading = (loadingDelayHidden = 0) => {

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    // HTML
    let loading = null;
    // Retardo para borrar
    const myLoadingDelayHidden = loadingDelayHidden;
    // Imágenes
    let imgs = [];

    // Videos
    let vids = [];

    // Elementos totales
    let counterElemsLoading = 0;
    let lenTotal = 0
    //-----------------------------------------------------
    // Funciones
    //-----------------------------------------------------

    /**
     * Método que aumenta el contador de las imágenes cargadas
     */
    function incrementCounterElems() {
        counterElemsLoading += 1;
        console.log('Conteo: ' + counterElemsLoading)
        // Comprueba si todas las imágenes están cargadas
        if (counterElemsLoading >= lenTotal){
             hideLoading();
             console.log('Pantalla de carga escondida');
        }
    }

    /**
     * Ocultar HTML
     */
    function hideLoading() {
        // Comprueba que exista el HTML
        if(loading !== null) {
            // Oculta el HTML de "cargando..." quitando la clase .show
            loading.classList.remove('show');

            // Borra el HTML
            setTimeout(function () {
                loading.remove();
            }, myLoadingDelayHidden);
        }

    }

    /**
     * Método que inicia la lógica
     */
    function init() {
        /* Comprobar que el HTML esté cargadas */
        document.addEventListener('DOMContentLoaded', function () {
            loading = document.querySelector('.loading');
            imgs = Array.from(document.images);
            console.log(imgs);
            vids = Array.from(document.getElementsByTagName('video'));
            console.log(vids);
            lenTotal = imgs.length + vids.length;
            console.log('Conteo total: ' + lenTotal);
            /* Comprobar que todos los elementos estén cargados */
            if(lenTotal = 0){
                hideLoading();
                return;
            }
            if(imgs.length > 0) {
                imgs.forEach(function (img) {
                    // A cada una le añade un evento que cuando se carge la imagen llame a la funcion incrementCounterImgs
                    img.addEventListener('load', incrementCounterElems, false);
                });
            }
            if(vids.length > 0){
                vids.forEach(function (vid) {
                    // vid.addEventListener('canplaythrough', incrementCounterElems, false)
                    vid.oncanplay = function() {
                        console.log('Video cargado');
                        incrementCounterElems();
                    };
                });
            }
            
        });
    }

    return {
        'init': init
    }
}

// Para usarlo se declara e inicia. El número es el tiempo transcurrido para borra el HTML una vez cargado todos los elementos, en este caso 1 segundo: 1000 milisegundos,
Loading(1000).init();
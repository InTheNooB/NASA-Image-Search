//Executé une fois la page complète chargée
$(document).ready(function() {

    //Crée les differents objets 
    wrkService = new WrkService();
    ctrlService = new CtrlService();
    wrkLogin = new WrkLogin();
    ctrlLogin = new CtrlLogin();
    ctrlIndex = new CtrlIndex();

    //Setup l'ajax
    wrkLogin.centraliserErreurHttp(ctrlIndex.afficherErreurHttp);

    //Load la page de login
    ctrlIndex.loadLogin();
});


// Variable + function pour le ReCaptcha
let isCaptchaValid = false;

function captchaLogin() {
    isCaptchaValid = true;
}


class CtrlIndex {
    constructor() {}


    // Charge une vue passé en argument
    chargerVue(vue, callback) {
        // charger la vue demandee
        $("#view").load("./views/" + vue + ".html", function() {
            // si une fonction de callback est spécifiée, on l'appelle ici
            if (typeof callback !== "undefined") {
                callback();
            }
        });
    }

    afficherErreurHttp(msg) {
        alert(msg);
    }


    loadLogin() {
        // Charge la vue du login
        this.chargerVue('login', function() {
            $("#login").submit(function(e) {
                e.preventDefault();
            })

        }); // fin ready (start)
    }

    loadAccueil() {
        // Charge la page d'accueil
        this.chargerVue('accueil', function() {
            // Ajoute les eventListener pour la bar de recherche 
            wrkService.addEventListener();
        }); // fin ready (start)
    }

}
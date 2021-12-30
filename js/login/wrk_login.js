/*
  But :    Worker du login de l'application
  Auteur : Lionel Ding
  Date :   08.06.2020 / V1.0
 */
class WrkLogin {
    constructor() {}

    // Mise en place de la gestion d'erreur AJAX
    centraliserErreurHttp(httpErrorCallbackFn) {
        $.ajaxSetup({
            error: function(xhr, exception) {
                let msg;
                if (xhr.status === 0) {
                    msg = "Pas d'accès à la ressource serveur demandée !";
                } else if (xhr.status === 404) {
                    msg = "Page demandée non trouvée [404] !";
                } else if (xhr.status === 500) {
                    msg = "Erreur interne sur le serveur [500] !";
                } else if (exception === "parsererror") {
                    msg = "Erreur de parcours dans le JSON !";
                } else if (exception === "timeout") {
                    msg = "Erreur de délai dépassé [Time out] !";
                } else if (exception === "abort") {
                    msg = "Requête Ajax stoppée !";
                } else {
                    msg = "Erreur inconnue : \n" + xhr.responseText;
                }
                httpErrorCallbackFn(msg);
            },
        });
    }

    // Requête au serveur de login
    login(identifiant, successCallback) {

        let url = "./php/login.php";
        let param = "username=" + identifiant.username +
            "&password=" + identifiant.password + "&domaine=" + identifiant.domaine +
            "&mail=" + identifiant.mail + "&langue=" + identifiant.langue;

        // envoi de la requête
        $.ajax(url, {
            type: "POST",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            data: param,
            success: successCallback,
        });
    }

}
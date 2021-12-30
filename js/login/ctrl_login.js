/*
  But :    Controller du login permettant de gérer les connexion des users
  Auteur : Lionel Ding
  Date :   08.06.2020 / V1.0
*/
class CtrlLogin {
    constructor() {}

    // Récupère les infos du user et demande plus loin de l'authentifier
    validerUtilisateur() {
        if (isCaptchaValid) {
            // récupère les objets InputText du formulaire HTML
            let userComp = document.getElementById("username");
            let pswComp = document.getElementById("password");
            let domComp = document.getElementById("domaine");

            // récupère les valeurs de ces objets
            let identifiant = {
                username: userComp.value,
                password: pswComp.value,
                domaine: domComp.value,
                mail: "x",
                langue: "x"
            };

            wrkLogin.login(identifiant, this.OKLogin);
        } else {
            alert("Veuillez remplir le captcha");
        }
    }


    // Méthode appelé une fois l'authentification essayé
    OKLogin(data) {
        if (data.includes("KO")) {
            alert("Vos identifications sont incorrectes !!!\nVeuillez réessayer...");
        } else {
            ctrlIndex.loadAccueil();
        }
    }


}
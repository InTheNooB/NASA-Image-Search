/*
  But :    Controller de la partie web service, permet de faire le lien avec le wrk des web service
  Auteur : Lionel Ding
  Date :   25.05.2020 / V1.0
*/

class CtrlService {
    constructor() {}

    submit() {
        // Récupère la valeur recherché
        let search = $("#searchText").val();

        // Submit
        wrkService.submit(search);

        // Vide la gallery et la barre de recherche
        $("#searchText").val("");
        $(".gallery").empty();
    }


    addImages(links, query) {

        // AJoute un texte "retour" pour le user
        if (links.length > 0) {
            $("#result").text("Results found for \" " + query + " \"");
        } else {
            $("#result").text("No results found for \" " + query + " \"");
        }

        // Ajoute chaque image dans la gallery
        links.forEach(link => {
            if (link) {
                $(".gallery").append('<div class="col-lg-3 col-md-4 col-6">\<a href="' + link + '" target="blank_" class="d-block mb-4 h-100">\<img class="img-fluid img-thumbnail" src="' + link + '" alt="">\</a>\</div>');
            }
        });
    }

}
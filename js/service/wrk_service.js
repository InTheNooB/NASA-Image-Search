class WrkService {
    constructor() {}

    addEventListener() {
        // Button click event
        $("#searchButton").click(function() {
            ctrlService.submit();
        });

        // Enter pressed event
        $('.searchBarForm').keypress(function(e) {
            if (e.which == 13) {
                ctrlService.submit();
                return false;
            }
        });
    }

    submit(search) {
        if (search !== "") {
            // Envoie la request
            wrkService.sendRequest(search);
        }
    }



    sendRequest(query) {
        // Envoie la request au Web-Service de la NASA
        $.ajax({
            url: "https://images-api.nasa.gov/search?media_type=image&q=" + query,
            type: 'GET',
            success: function(data) {
                // Filtre les données reçues de la NASA
                wrkService.filterData(data, query);
            }
        });
    }

    filterData(data, query) {
        // Filtre les données reçues afin de ne récupéré que les liens des images
        let links = new Array();
        data['collection']['items'].forEach(item => {
            item['links'].forEach(link => {
                links.push(link['href']);
            });
        });

        // Ajoute les images dans la gallery
        ctrlService.addImages(links, query);
    }


}
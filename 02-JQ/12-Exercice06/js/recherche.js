/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

	// Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
	// Le résultat des membres correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username.
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/


/* ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username. */

// -- Chargement du DOM ...
$(function () {

    // --1.ecouter l'utilisateur
    $('#search').on('change', function(){
        const search = $(this).val();

        // --2.récupération du FLUX JSON (api)
        $.getJSON('https://jsonplaceholder.typicode.com/users', users => {
            console.log(users);


            // --  Parcourir le tableau de l'API
            for(let i = 0; i < users.length; i++){
                console.log(users[i]);


                var user = users[i];

                // Filtre le tableau
                if (search === user.username || search === user.name || search === user.email || search === user.phone ){
                    // console.log(user[i].name);

                    $(`
                     <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet :${user.name}</p>
                                <p>Username : ${user.username}</p>
                                <p>Email : ${user.email}</p>
                                <p>Téléphone :${user.phone} </p>
                            </div>
                        </div>
                    
                    `).appendTo($(".resultat"));

                   
                };

                // -- 


            };


        }) ;
    });
            });


























// Début du Jquery "DOM ready"
$(function(){
    
    // Ecouter l'événement "Submit"
    $('#adoption').submit(function(e){
        //
        e.preventDefault();

    // Récupération des champs select et textarea
    const choix_chats = $('#choix_chats');
    const raison = $('#raison');
     

    //--Condition de validation
        if (choix_chats.val() === '--Sélectionnez--' || raison.val().length < 15){

            // En cas de non-validation des champs, les bordures de ceux-ci deviennent rouge. 
            $(choix_chats).addClass('border border-danger');
            $(raison).addClass('border border-danger');

        }else{
            // Remplacer le formulaire par un message de confirmation si les champs sont valides. 
            $(this).replaceWith(`
            <div class="alert alert-success"> Votre demande d'adoption à bien été transmis ! Nous vous répondrons dans les meilleurs delais.</div
            `)
        }



    })//Fin de l'événement Submit
})//-- Fin de jQuery
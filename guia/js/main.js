$(document).ready(function () {

// Al hacer click sobre un elemento de la lista de sidebar

    $(document).on('click','.load_content',function (e) {
        let id= this.id.split('_')[1];
        limpiaContent(id);
        cargaContent(id);
    });








});

// Vacía el contenido principal y elimina la clase activo de toda la lista del sidebar
function limpiaContent(id) {
    $('#content').empty();
    $('#sidebar li').removeClass('activo');
    let sel = '#load_'+id;
    $(sel).addClass('activo');
}

// Carga el contenido ID en el contenido principal

function cargaContent(id) {
    let sel = '#cont_'+id;
    let html = $(sel).html();
    $('#content').html(html);
}
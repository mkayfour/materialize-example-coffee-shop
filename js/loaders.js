$(document).ready(function(){
    $('.modal').modal();    
    $('.parallax').parallax();    
});

function toggleModal(){
    let instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}
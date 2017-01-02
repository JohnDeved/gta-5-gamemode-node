$('.ui.modal').modal({
    closable: false
}).modal('show')

$('#erstellen').click(function() {
    $('#erstellen').addClass('loading')
    $('#erstellen').removeClass('basic')
    $('#erstellen').removeClass('green')
    $('#erstellen').css('pointer-events', 'none')
    $('#vorname').attr('disabled', true)
    $('#nachname').attr('disabled', true)
})

checkReady = function() {
    console.log('keyup');
    if ($('#vorname').val() !== "" && $('#nachname').val() !== "" && !$('#vorname').parent().hasClass('is-invalid') && !$('#nachname').parent().hasClass('is-invalid')) {
        if (!$('#erstellen').hasClass('green')) {
            $('#erstellen').addClass('green')
            $('#erstellen').removeClass('basic')
            $('#erstellen').css('pointer-events', 'all')
        }
    } else {
        if ($('#erstellen').hasClass('green')) {
            $('#erstellen').removeClass('green')
            $('#erstellen').addClass('basic')
            $('#erstellen').css('pointer-events', 'none')
        }
    }
}

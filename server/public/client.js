console.log('Client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $.ajax({
        type: 'GET',
        url: '/monsters'
    })
.then(function(response){
    console.log(response);
    for( let i = 0; i<response.length; i++){
    $('ul').append('<li>' + response[i] + '</li>');
    }
})
}

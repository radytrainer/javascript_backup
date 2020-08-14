
$(function() {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";
    $.getJSON(url, function(data) {
        data.hits.forEach( e => {
            console.log(e);
        });
    });
});
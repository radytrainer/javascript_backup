$(function() {
    // get data form the input 
    $('#form-data').submit(function(event) {
        var formData = {
            'fname': $('input[name=fname]').val(),
            'lname': $('input[name=lname]').val(),
            'email': $('input[name=email]').val(),
            'address': $('textarea[name=address]').val(),
        };

        // call ajax and insert data to database
        $.ajax({
            method: "POST",
            url: 'request.php',
            data: {form: formData}
        }).done(function(response) {
            // console.log(response);
            $('.message').text(response).addClass('active-message');
            setInterval(function() {
                $('.message').removeClass('active-message');
            }, 3000);
            getStudentData();
        });
        $('input[type=text],input[type=email], textarea').val("");
        event.preventDefault();
    })


    // Get data from database
    $tableBody = $('.table-body');
    // call function 
    getStudentData();
    function getStudentData()
    {
        $('.table-body tr').remove();
        $.ajax({
            method: "POST",
            url: 'request.php',
            data: {bool : true},
            dataType: 'json',
        }).done(function(response) {
            // console.log(response);
            $.each(response, function(index , arrayOne) {
                $tableBody.append("<tr>");
                $.each(arrayOne, function(key, value) {
                    $('.table-body tr').eq(index).append("<td>" + value + "</td>");
                })
            })
        });
    }
});
// $('#registerForm').submit(function() {
$('#btnRegister').click(function() {
    var url = 'http://m.halloffametanzania.com/services/save_register.php';
    // var postData = $(this).serialize();
    formData = {
        fname   : $('#fullname').val(),
        email   : $('#email').val(),
        phone   : $('#mobilephone').val(),
        school  : $('#school').val(),
        aCat    : $('#awardCat').val(),
        wCat    : $('#whyCat').val()     
    }

    // var $fname = $('#fullname').val();
    // var $email = $('#email').val();
    // var $phone = $('#mobilephone').val();
    // var $school = $('#school').val();
    // var $aCat = $('#awardCat').val();
    // var $wCat = $('#whyCat').val();        

    if (formData.fname == "" && formData.email == "" && formData.phone == "" && 
        formData.school == "" && formData.aCat == "" && formData.wCat == "") {
            alert('Please fill in all the fields.');  
    } else {
        //submit the form
        $.ajax({
            type: "POST",
            url: url,
            crossDomain: true,
            cache: false,
            async:true,
            dataType: "json",
            // data: postData,
            data: formData,
            contentType: 'application/json',
            success: function (data) {
                if (data == null)
                    console.log('NULL');
                else
                    console.log(data);

                $('#register-thankyou').show();
                $('#register-form').hide();
            },
            error: function(data){
                console.log(data);
                alert('There was an error while registering. Please, Try again later!');
            }
        }); //$.ajax
    }
    return false;

});
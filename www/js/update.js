// $('#registerForm').submit(function() {
$('#btnRegister').click(function() {
    var url = 'http://pgntester.jango.me:5000/api/waterpoints';
    // var postData = $(this).serialize();
    formData = {
        service_code : "wps001",
        attribute: {
            waterpoint_id:"0202309922WP34" , 
            status   : "Not Functional"
        }
    }    

    if (formData.status == "") {
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
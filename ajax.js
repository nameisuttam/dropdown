//Change Password
$(document).on('submit', '#change_password', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "ajax/change_password.php",
        data: $(this).serialize(),
        success: function (data) {
            $('#change_password').find('input').val('');
            $("#msg").html(data);
        }
    });
});

//forgot/change Password
$(document).on('submit', '#newPassword', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "ajax/new_password.php",
        data: $(this).serialize(),
        success: function (data) {
            $('#newPassword').find('input').val('');
            $("#msg").html(data);
        }
    });
});

//forgot Password
$(document).on('submit', '#forgot', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "ajax/forgot_password.php",
        data: $(this).serialize(),
        success: function (data) {
            $("#msg").html(data);
        }
    });
});

//User login
$(document).on('submit', '#loginUser', function (e) {
    e.preventDefault();

    var email = $("#username").val().trim();
    var password = $("#password").val().trim();

    if (email != "" && password != "") { } {
        $.ajax({
            url: 'ajax/check_user.php',
            type: 'post',
            data: {
                email: email,
                password: password
            },
            success: function (response) {
                var msg = "";
                if (response == 1) {
                    window.location = "home.php";
                } else {
                    msg = "username and password not found!";
                }
                $("#msg").html(msg);
            }
        });
    }
});

//insert validation data
$(document).on('submit', '#userForm', function (e) {
    e.preventDefault();

    $.ajax({
        method: "POST",
        url: "ajax/insert_validation.php",
        data: $(this).serialize(),
        success: function (data) {
            $('#msg').html(data);
            $('#userForm').find('input')
            // .val('')
        }
    });
});

//update validation data
$(document).on('submit', '#updateForm', function (e) {
    e.preventDefault();
        $.ajax({
            url: "ajax/update_validation.php",
            method: "POST",
            data: $('form').serialize(),
            // dataType: "text",
            success: function (strMessage) {
                // window.location = "index.php";
                $('#message').html(strMessage)
            },
        });
    });

//business update dropdown
$(document).ready(function () {
    $.ajax({
        url: "ajax/bussiness.php",
        type: "POST",
        success: function (data) {
            $("#business").append(data);
            $("#business").find();  
            jQuery("#business_val_id").val();
            var business_id = $("#business_val_id").val();
            $("#business").val(business_id);
        }
    });
});

//state update dropdown 
$(document).ready(function () {
    // var state = $('#state')
    $.ajax({
        url: "ajax/state.php",
        type: "POST",
        success: function (data) {
            $("#state").append(data);
            $("#state").find();
            jQuery("#state_val_id").val();
            var state_id = $("#state_val_id").val();
            $("#state").val(state_id);
        }
    });
});

//city update dropdown
$(document).ready(function () {
    // var state = $('#state')
    $.ajax({
        url: "ajax/city.php",
        type: "POST",
        success: function (data) {
            $("#city").append(data);
            $("#city").find();
            jQuery("#city_val_id").val();
            var city_id = $("#city_val_id").val();
            $("#city").val(city_id);
        }
    });
});

//city_state dependent dropdown
$(document).ready(function(){
    $("#state").change(function(){  
        var state_id = $(this).val();   
        if(state_id){
            $.ajax({
                // type:"GET",
                url:"ajax/state_city_dependent.php",
                method:"POST",
                data:{state_id:state_id},
                success:function(data){
                    $("#city").html(data);
                }
            });
        }
    });
});
/*
//city_state dependent dropdown
$(document).ready(function () {

    $('#state').change(function () {
        // var stateId = $("#state_val_id").val();
        loadCity($(this).find(':selected').val())
        // ("#state").val(stateId);
    })


});

function loadState() {
    $.ajax({
        type: "POST",
        url: "ajax/state_city_dependent.php",
        data: "get=state"
    }).done(function (result) {

        $("#state").append($(result));
        $("#state").append(result);
            $("#state").find();
            jQuery("#state_val_id").val();
            var stateId = $("#state_val_id").val();
            $("#state").val(stateId);
        
    });
}

function loadCity(stateId) {
    $("#city").children().remove()
    $.ajax({
        type: "POST",
        url: "ajax/state_city_dependent.php",
        data: "get=city&id=" + stateId
    }).done(function (result) {

        $("#city").append($(result));
        $("#city").find();
            jQuery("#city_val_id").val();
            var city_id = $("#city_val_id").val();
            $("#city").val(city_id);

    });
}


loadState();

*/
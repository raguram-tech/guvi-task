$(document).ready(function () {
  $("#register-form").validate(
    {
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 6,
        },
        // confirmpassword: {
        //   required: true,
        //   minlength: 6,
        //   equalTo: "#password",
        // },
      },
      messages: {
        username: {
          required: "Please Enter the name",
        },
        email: {
          required: "Please Enter the email",
          email: "The email should be in the format: abc@domain.com",
        },
        password: {
          required: "Please Enter a password",
          minlength: "Your password must be atleat 6 chracters long",
        },
        // confirm_password: {
        //   required: "please Provide a password",
        //   minlength: "Your password must be atleat 6 chracters long",
        //   equalTo: "please enter same password as above",
        // },
      },
    },
    (submitForm = function (e) {
      var username = $("input[name=username]").val();
      var email = $("input[name=email]").val();
      var password = $("input[name=password]").val();
      var formData = {
        username: username,
        email: email,
        password: password,
      };
      $.ajax({
        url: "http://localhost/GUVIproject/php/register.php",
        type: "POST",
        data: formData,
        success: function (response) {
          var res = JSON.parse(response);
          console.log(res);
        },
      });
    })
  );
});

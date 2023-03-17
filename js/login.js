$(document).ready(function () {
  $("#login-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      email: {
        email: " The email should be in the format: abc@domain.com",
      },
      password: {
        required: " Please Provide a password",
        minlength: "Your password must be atleat 6 chracters long",
      },
    },
  }),
    (submitForm = function (e) {
      var email = $("input[name=email]").val();
      var password = $("input[name=password]").val();
      // alert(username);
      var formData = {
        email: email,
        password: password,
      };
      $.ajax({
        url: "http://localhost/GUVIproject/php/login.php",
        type: "POST",
        data: formData,
        success: function (response) {},
      });
    });
  if (localStorage.getItem("loggedIn") == "true") {
    $("#login-form").hide();
    $("#welcome-message").html(
      "Welcome, " + localStorage.getItem("email") + "!"
    );
  }

  function login() {
    var email = $("input[name=email]").val();
    var password = $("input[name=password]").val();

    $.post("login.php", { email: email, password: password }, function (data) {
      if (data == "success") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("email", email);
      } else {
        // Login failed
        alert("Incorrect email or password!");
      }
    });
  }

  function logout() {
    $.get("logout.php", function () {
      location.reload();
    });
  }
});

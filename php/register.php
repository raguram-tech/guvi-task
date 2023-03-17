<?php

$host = "localhost";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=guviproject", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection Failed" . $e->getMessage();
}

$response = array('success' => false);
if (isset($_POST["email"]) && isset($_POST["password"]) && $_POST["email"] != '' && $_POST["password"] != '' && isset($_POST["username"]) && $_POST["username"] != '') {
    $sql = "INSERT INTO register(username,email,password) VALUES('" . addslashes($_POST["username"]) . "','" . addslashes($_POST["email"]) . "','" . addslashes($_POST["password"]) . "')";

    if ($conn->query($sql)) {
        $response['success'] = true;
        header('Location: ../login.html');
        exit();
    } else {
        if ($conn->errorCode() === 1062) {
            die("Email Already Taken");
        } else {
            die($conn->errorInfo() . " " . $conn->errorCode());
        }
    }
}

echo json_encode($response);

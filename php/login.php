<?php

$host = 'localhost';
$dbname = 'guviproject';
$username = 'root';
$password = '';


try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    exit();
}

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $pdo->prepare("SELECT * FROM register WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if ($password == $user['password']) {
    $username = $user['username'];
    header("Location: ../profile.html?username=$username");
    session_start();
    $_SESSION['email'] = $email;
} else {
    echo 'failure';
}

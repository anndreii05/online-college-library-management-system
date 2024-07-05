<?php

session_start();

include_once 'header.php';
include_once 'connection_users.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->username) && isset($data->password)){
    $username = $data->username;
    $password = $data->password;
    
    $query = "SELECT * FROM users WHERE username=:username";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    if($stmt->rowCount() > 0)
    {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if($password == $user['password'])
        {
            $_SESSION['username'] = $username;
            $json_array = array('message' => "Success!", 'username' => $username);
            echo json_encode($json_array);
        } 
        else 
        {
            echo json_encode(["message" => "Wrong password!"]);
        }
    }
    else 
    {
        echo json_encode(["message" => "User not present in database!"]);
    }
    }
?>
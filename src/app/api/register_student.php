<?php

include_once 'header.php';
include_once 'connection_users.php';

$data = json_decode(file_get_contents("php://input"));

// Extract first name and last name from register page
if (isset($data->firstname) && isset($data->lastname) && isset($data->studentcode))
{
    $firstname   = $data->firstname;
    $lastname    = $data->lastname;
    $studentcode = $data->studentcode;

    $query = "SELECT * FROM users WHERE (firstname=:firstname AND lastname=:lastname)";
    $statement = $conn->prepare($query);
    $statement->bindParam(":firstname", $firstname);
    $statement->bindParam(":lastname", $lastname);
    $statement->execute();

    if ($statement->rowCount() > 0){
        // Treat the case if a student has the same name with another one
        // In this case, the username should be "firstname.lastname.x", where x is a digit
        $index = 2;
        while ($index > 0){
            $query = "SELECT * FROM users WHERE username=:username";
            $username = strtolower($firstname) . "." . strtolower($lastname) . "." . $index;
            $statement = $conn->prepare($query);
            $statement->bindParam(":username", $username);
            $statement->execute();
            if ($statement->rowCount() > 0){
                $index += 1;
            } 
            else{
                $password = $studentcode;
                $query = "INSERT INTO users (firstname, lastname, username, studentcode, password) VALUES (:firstname, :lastname, :username, :studentcode, :password)";
                $statement = $conn->prepare($query);
                $statement->bindParam(":firstname", $firstname);
                $statement->bindParam(":lastname", $lastname);
                $statement->bindParam(":studentcode", $studentcode);
                $statement->bindParam(":username", $username);
                $statement->bindParam(":password", $password);

                try{
                    $statement->execute();
                    echo 'Success!';
                }
                catch (PDOException $e) {
                    die('This operation goes into exception: ' . $e->getMessage());
                }

                break;
            }
        }
    }
    else{
        $username = strtolower($firstname) . "." . strtolower($lastname);
        $password = $studentcode;
        $query = "INSERT INTO users (firstname, lastname, username, studentcode, password) VALUES (:firstname, :lastname, :username, :studentcode, :password)";
        $statement = $conn->prepare($query);
        $statement->bindParam(":firstname", $firstname);
        $statement->bindParam(":lastname", $lastname);
        $statement->bindParam(":studentcode", $studentcode);
        $statement->bindParam(":username", $username);
        $statement->bindParam(":password", $password);

        try{
            $statement->execute();
            echo 'Success!';
        }
        catch (PDOException $e) {
            die('Unfortunately, an exception occured: ' . $e->getMessage());
        }
    }
}
?>
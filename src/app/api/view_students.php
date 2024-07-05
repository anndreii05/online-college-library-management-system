<?php

include_once 'header.php';
include_once 'connection_users.php';

$query = "SELECT id, firstname, lastname, studentcode, username from users";
$results = $conn->query($query);

while($row = $results->fetch(PDO::FETCH_ASSOC)){
    if ($row['username'] != 'admin')
    {
        $users[] = $row;
    }
    else
    {
        continue;
    }
}

echo json_encode($users);
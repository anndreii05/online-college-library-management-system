<?php

include_once 'header.php';
include_once 'connection_articles.php';

$reservedBy = $_GET['reservedby'];

$query = "SELECT id, title, category, author, isbn, reservedby, actualdate, duedate FROM reserved_articles WHERE reservedby='$reservedBy'";
$results = $conn->query($query);

$articles = array();

while($row = $results->fetch(PDO::FETCH_ASSOC)){
    $articles[] = $row;
}

echo json_encode($articles);
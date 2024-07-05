<?php

include_once 'header.php';
include_once 'connection_articles.php';

$query = "SELECT id, requestedarticle, author, category from requested_articles";
$results = $conn->query($query);

$articles = array();

while($row = $results->fetch(PDO::FETCH_ASSOC)){
    $articles[] = $row;
}

echo json_encode($articles);

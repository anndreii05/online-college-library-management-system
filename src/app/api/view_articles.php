<?php

include_once 'header.php';
include_once 'connection_articles.php';

$query = "SELECT id, title, category, author, isbn, numberofarticles from articles";
$results = $conn->query($query);

$articles = array();

while($row = $results->fetch(PDO::FETCH_ASSOC)){
    if ($row['title'] != '' && $row['numberofarticles'] > 0)
    {
        $articles[] = $row;
    }
    else
    {
        continue;
    }
}

echo json_encode($articles);
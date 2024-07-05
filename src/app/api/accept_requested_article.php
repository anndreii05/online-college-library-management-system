<?php
include 'header.php';
include_once 'connection_articles.php';

$id = $_GET['id'];

$statement = $conn->prepare("SELECT requestedarticle FROM requested_articles WHERE id = ?");
$statement->execute([$id]);
$reqarticletitle = $statement->fetchColumn();

$statement = $conn->prepare("SELECT category FROM requested_articles WHERE id = ?");
$statement->execute([$id]);
$reqarticlecategory = $statement->fetchColumn();

$statement = $conn->prepare("SELECT author FROM requested_articles WHERE id = ?");
$statement->execute([$id]);
$reqarticleauthor = $statement->fetchColumn();

    $query = "INSERT INTO articles (title, category, author, isbn, numberofarticles) VALUES (:title, :category, :author, '-', 1)";
    $statement = $conn->prepare($query);
    $statement->bindParam(":title", $reqarticletitle);
    $statement->bindParam(":category", $reqarticlecategory);
    $statement->bindParam(":author", $reqarticleauthor);
    $statement->execute();

$statement = $conn->prepare("DELETE FROM requested_articles WHERE id = ?");
$statement->execute([$id]);

$conn = null;

echo json_encode(["message" => "Article accepted and added succesfully!"]);
?>
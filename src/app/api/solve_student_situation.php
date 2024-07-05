<?php
include 'header.php';
include_once 'connection_articles.php';

$id = $_GET['id'];
$articletitle = $_GET['title'];
$isbn = $_GET['isbn'];

$stmt = $conn->prepare("DELETE FROM reserved_articles WHERE id = ?");
$stmt->execute([$id]);

$query = "SELECT * FROM articles WHERE title = ? AND isbn = ?";
$statement = $conn->prepare($query);
$statement->execute([$articletitle, $isbn]);

if ($statement->rowCount() > 0){
    $row = $statement->fetch(PDO::FETCH_ASSOC);
    $newquantity = $row['numberofarticles'] + 1;

    $query = "UPDATE articles SET numberofarticles='$newquantity' WHERE title = ? AND isbn = ?";
    $statement = $conn->prepare($query);
    $statement->execute([$articletitle, $isbn]);

    echo json_encode(["message" => "Article deleted!"]);
}
?>
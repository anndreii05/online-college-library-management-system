<?php
include 'header.php';
include_once 'connection_articles.php';

$id = $_GET['id'];

$stmt = $conn->prepare("DELETE FROM articles WHERE id = ?");
$stmt->execute([$id]);

echo json_encode(["message" => "Article deleted!"]);
?>
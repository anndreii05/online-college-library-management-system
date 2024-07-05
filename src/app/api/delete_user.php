<?php
include 'header.php';
include_once 'connection_users.php';

$id = $_GET['id'];

$stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$id]);

echo json_encode(["message" => "User deleted!"]);
?>
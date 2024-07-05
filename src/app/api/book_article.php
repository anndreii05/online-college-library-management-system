<?php
include 'header.php';
include_once 'connection_articles.php';

$id = $_GET['id'];

$query = "SELECT * FROM articles WHERE id = ?";
$statement = $conn->prepare($query);
$statement->execute([$id]);

if ($statement->rowCount() > 0){
    $row = $statement->fetch(PDO::FETCH_ASSOC);
    $reservedID = $row['id'];
    $reservedTitle = $row['title'];
    $reservedCategory = $row['category'];
    $reservedAuthor = $row['author'];
    $reservedISBN = $row['isbn'];
    
    $newquantity = $row['numberofarticles'] - 1;

    $data = json_decode(file_get_contents('php://input'), true);
    $reservedby = $data['username'];
    $actualdate = $data['actualDate'];
    $duedate    = $data['dueDate'];

    $query = "SELECT * FROM reserved_articles WHERE (title=:title AND reservedby=:reservedby)";
    $statement = $conn->prepare($query);
    $statement->bindParam(":title", $reservedTitle);
    $statement->bindParam(":reservedby", $reservedby);
    $statement->execute();
    if ($statement->rowCount() > 0){
        echo json_encode(["message" => "You have already booked this article!"]);
    }

    else{
        $query = "INSERT INTO reserved_articles (title, category, author, isbn, reservedby, actualdate, duedate) VALUES (:title, :category, :author, :isbn, :reservedby, :actualdate, :duedate)";
        $statement = $conn->prepare($query);
        $statement->bindParam(":title", $reservedTitle);
        $statement->bindParam(":category", $reservedCategory);
        $statement->bindParam(":author", $reservedAuthor);
        $statement->bindParam(":isbn", $reservedISBN);
        $statement->bindParam(":reservedby", $reservedby);
        $statement->bindParam(":actualdate", $actualdate);
        $statement->bindParam(":duedate", $duedate);

        $statement->execute();

        $query = "SELECT * FROM articles WHERE id = ?";

        $query = "UPDATE articles SET numberofarticles='$newquantity' WHERE id = ?";
        $statement = $conn->prepare($query);
        $statement->execute([$id]);

        echo json_encode(["message" => "Success!"]);
    }
}
?>
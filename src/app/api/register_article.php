<?php

include 'header.php';
include_once 'connection_articles.php';

$data = json_decode(file_get_contents("php://input"));

// Extract first name and last name from register page
if (isset($data->articleTitle) && isset($data->articleCategory) && isset($data->articleAuthor) && isset($data->articleISBN) && isset($data->articleNumber))
{
    $title = $data->articleTitle;
    $category = $data->articleCategory;
    $author = $data->articleAuthor;
    $isbn = $data->articleISBN;
    $numberofarticles = $data->articleNumber;

    $query = "SELECT * FROM articles WHERE (title=:title AND category=:category AND author=:author AND isbn=:isbn AND numberofarticles=:numberofarticles)";
    $statement = $conn->prepare($query);
    $statement->bindParam(":title", $title);
    $statement->bindParam(":category", $category);
    $statement->bindParam(":author", $author);
    $statement->bindParam(":isbn", $isbn);
    $statement->bindParam(":numberofarticles", $numberofarticles);
    $statement->execute();

    if ($statement->rowCount() > 0){
        echo json_encode(["message" => "Article already added."]);
    }
    else{
        $query = "INSERT INTO articles (title, category, author, isbn, numberofarticles) VALUES (:title, :category, :author, :isbn, :numberofarticles)";
        $statement = $conn->prepare($query);
        $statement->bindParam(":title", $title);
        $statement->bindParam(":category", $category);
        $statement->bindParam(":author", $author);
        $statement->bindParam(":isbn", $isbn);
        $statement->bindParam(":numberofarticles", $numberofarticles);

        try{
            $statement->execute();
            echo 'Success!';
        }
        catch (PDOException $e) {
            die('This operation goes into following exception: ' . $e->getMessage());
        }
    }
}
else{
    echo(json_encode(["message" => "Not all datas were provided."]));
    print_r($data);
}
?>
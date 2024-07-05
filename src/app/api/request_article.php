<?php

include_once 'header.php';
include_once 'connection_articles.php';

$data = json_decode(file_get_contents("php://input"));

// Extract first name and last name from register page
if (isset($data->titleReqArticle) && isset($data->categoryReqArticle) && isset($data->authorReqArticle))
{
    $titlereqarticle    = $data->titleReqArticle;
    $authorreqarticle   = $data->authorReqArticle;
    $categoryreqarticle = $data->categoryReqArticle;

    $query = "SELECT * FROM requested_articles WHERE (requestedarticle=:titlereqarticle AND category=:categoryreqarticle)";
    $statement = $conn->prepare($query);
    $statement->bindParam(":titlereqarticle", $titlereqarticle);
    $statement->bindParam(":categoryreqarticle", $categoryreqarticle);
    $statement->execute();

    if ($statement->rowCount() > 0){
        echo json_encode(["message" => "Article already requested!"]);
    }
    else{
        $query = "INSERT INTO requested_articles (requestedarticle, author, category) VALUES (:titlereqarticle, :authorreqarticle, :categoryreqarticle)";
        $statement = $conn->prepare($query);
        $statement->bindParam(":titlereqarticle", $titlereqarticle);
        $statement->bindParam(":authorreqarticle", $authorreqarticle);
        $statement->bindParam(":categoryreqarticle", $categoryreqarticle);
        try{
            $statement->execute();
            echo 'Success!';
        }
        catch (PDOException $e) {
            die('Unfortunately, an exception occured: ' . $e->getMessage());
        }
    }
}
else{
    echo json_encode(["message" => "Something happened..."]);
}
?>
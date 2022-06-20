<?php
include 'connect.php';
class author{
    public $id ;
    public $name ;
    public $followers ;
    public $img ;
}
class post{
   public $id ;
   public $title ;
   public $content;
   public $date;
   public $authorId;
   public $img;

   public $author;
}


$stmt = "SELECT * FROM posts
        ORDER BY RAND()  LIMIT 3";

// "SELECT * FROM author WHERE id = {$authorId}"

$postsArray = mysqli_query($conn,$stmt);
//$count = mysqli_num_rows($userFound);
$result = array();

    while($row = mysqli_fetch_array($postsArray)){
        //echo $row['title'] . "<br>";
        $post = new Post();
        $post->id =$row['id'];
        $post->title =$row['title'];
        $post->content =$row['content'];
        $post->date =$row['date'];
        $post->authorId =$row['authorId'];
        $post->img = $row['img'];
        $post->author = new Author();
        $authQuery = "SELECT * FROM author WHERE id = {$post->authorId}";
        $author = mysqli_query($conn,$authQuery);
        $authorData = mysqli_fetch_array($author);
        
        $post->author->name = $authorData['name'];
        $post->author->followers =$authorData['noOfFollowers'];
        $post->author->img =$authorData['img'];
        $post->author->id =$authorData['id'];
        array_push($result, $post);



  

    }
    
    
?>
<?php

include_once 'connect.php';
echo("Before checking!");
if(isset($_POST['submit']))
{    
     echo("Started inserting !");
     $email = $_POST['email'];
     $pass = hash('md5',$_POST['password']);
     $username = $_POST['username'];
     echo("I am here");   
    $sql = "INSERT INTO users (email,password,username) VALUES ('$email','$pass','$username')";
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
         header("Location:http://localhost/another-medium/signin.php");
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}


?>


<?php
    
    $conn = mysqli_connect("localhost:3306", "root", "", "another_medium2");
 
    if(!$conn)
        echo ("Connection Error");
    // else
    //     echo "Database Connection Successfully.";
    
?>
<?php
 /* 
 
 title
 content
 date 
 authorid
 img
 
 */


 /* 
 id
 name
 noOfFollowers
 img

 
 
 */
include_once 'logic/connect.php';
//echo("Before checking!");

if($_POST)
{    
     //echo("Started inserting !");
     $title = $_POST['title'];
     $content = $_POST['story'];  
     $sql = "INSERT INTO posts (title,content) VALUES ('$title','$content')";
     if (mysqli_query($conn, $sql)) {
        
    
        echo   '<div class="alert alert-success alert-dismissible fade show text-center" role="alert">
        <strong>Post uploaded successfully </strong>
        <button type="button" class="btn close" data-bs-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
        </button>
        </div>'; 
    
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medium+ | New Story</title>
    <link rel="icon" type="image/x-icon" href="./assets/LeftNavBar/icons/favicon_2.svg">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link href="./style/create_new_story_style.css" rel="stylesheet">
</head>
<body>
    <div style="margin-top:30px;">
    <nav>
        <div class="nav-left">
            <img src="./assets/LeftNavBar/icons/MediumPlus.svg" id="medium" >
            <span id="user-name">Draft in QuadM</span>
            <span id="isSaved" style="margin: 0 1em 0;">Saved</span>
        </div>
        <div style="flex: 40%;"></div>
        <div class="nav-right">
            <ul>
                <li>
                    <span id="publish" name="publish" >Publish</span>
                </li>
                <li>
                    <img src="./assets/LeftNavBar/icons/three dots.svg" class="icon-right" style="height: 1em;" ></img>
                </li>
                <li>
                    <img src="./assets/LeftNavBar/icons/Notification.svg" class="icon-right" ></img>
                </li>
                <li>
                    <img src="./assets/LeftNavBar/icons/profile picture.svg" id="profile-picture"></img>
                </li>
            </ul>
        </div>
        
    </nav>
    <div id="content">
        <form id="story-form" name="story" method="post">
            <div id="story-area">
                <img src="./assets/LeftNavBar/icons/Add.svg" id="add-icon-1" class="add-icon hidden"/>
                <input name="title" type="text" placeholder="Title" style="font-size: 2.5em;" class="input" id="input-1">
                <br>
                <img src="./assets/LeftNavBar/icons/Add.svg" id="add-icon-2" class="add-icon hidden"/>
                <textarea name="story" type="text-area" placeholder="Tell your story..." style="font-size: 1.3em; overflow: hidden; " rows="20" class="input" id="input-2"></textarea>
            </div>
        </form>
    </div>
    </div>
    <footer></footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    <script src="js/createNewStory.js"></script>
</body>
</html>
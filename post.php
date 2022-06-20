<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="../assets/LeftNavBar/icons/favicon_2.svg">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../style/layout_style.css">
    <link rel="stylesheet" href="../style/stories_style.css">

    <!-- Change this to your page name-->

    <title>Another Meduim+ | Notifications</title>

    <!--################################-->


</head>

<body>
    <div class="container-xl">
        <div class="roww">
            <div class="column left">
                <a href="index.php">
                    <img style="cursor: pointer; margin-top: 20px; margin-right: 8px;" src="../assets/LeftNavBar/icons/MediumPlus.svg" alt="medium plus" />
                </a>
                <ul class="nav flex-column justify-content-center" style="height: 100%;">
                    <li class="nav-item">
                        <a href="home-page.php">
                            <img class="leftAssets nav-link" src="../assets/LeftNavBar/home.svg" alt="Home Page">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="notificationPage.php">
                            <img class="leftAssets nav-link" src="../assets/LeftNavBar/bell_off.svg" alt="Notifications">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="lists-page.php">
                            <img class="leftAssets nav-link" src="../assets/LeftNavBar/bookmark.svg" alt="Saved Articles">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="storiesPage.php">
                            <img class="leftAssets nav-link" src="../assets/LeftNavBar/icons/stories-icon.svg" alt="stories" style="width:60px ;">
                        </a>
                    </li>
                    <li class="nav-item" id="left-hr">
                        <hr style="height: 1px;">
                    </li>
                    <li class="nav-item">
                        <a href="createNewStory.php">
                            <img class="leftAssets nav-link" src="../assets/LeftNavBar/write.svg" alt="Write Articles">
                        </a>
                    </li>
                </ul>
            </div>

            <div class="column" style="font-family:Calibri, 'Trebuchet MS', sans-serif, Arial; width:100%;">
                <div style="margin: 0 10% 0;">
                    <center style="display: flex; align-items: center; margin: 5em auto 2em;">
                        <h1 style="flex: 40%; font-size:50px; text-align: left;">Posts</h1>
                    </center>
                    <div id="all-content" style="padding-top: 0%;">
                        <div>
                            <!-- <ul style="display: flex; padding-left:0;list-style:none" id="options">
                                <li id="all">All</li>
                                <li id="responses">Responses</li>
                            </ul> -->
                            <center>
                                <hr style="text-align:left;margin:0 0 20px;width: 100%; position: relative;" id="nav-hr">
                            </center>
                        </div>
                        <div id="maincontent" style="max-width:100%"></div>
                    </div>
                </div>
            </div>

           

        </div>
    </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- <script src="../js/home-page.js"></script> -->
    <?php
    include 'logic/connect.php';
    $stmt = "select * from posts where $post = id";
    $query = mysqli_query($conn, $stmt);
    $count = mysqli_num_rows($query);
    $counter = 0;
    echo "<script type=\"text/javascript\">
      let main_content = document.querySelector(\"#maincontent\");
      let home = document.querySelector(\"#home\");
      let options = document.querySelectorAll(\"#options li\");
      
      
    const renderOnePost = (id, title, time, author, content, img) => {
    const post = document.createElement(\"div\");
    post.style ='padding:1em;display:flex;flex-direction:column; align-items:center;font:sans-serif';
    post.innerHTML = \"<div style='display:flex;flex-direction:row;align-self:start;margin:2em 0;align-items:center;'><img src='https://alum.kuleuven.be/alumniverenigingen/regionale-kernen/Brugge/fotos/unknown-man.png' alt='userphoto' class='rounded-circle' style='width: 150px;height:150px'/><div style='display: flex; flex-direction: column; margin-left: 30px;'><h3><b class='authorName'>author</b></h3><small id='date'>2022-3-4 <b>·</b> 3-min read</small><small></small></div></div><Strong style='font-size:2rem;'>\"+title+\"</Strong><br><img src='\"+img+\"' style='width:100%; height:100%'/><br><p class='container' style='font-family:sans-serif'>\"+content+\"</p>\";
    return post;
  };
      
      

      </script>";
        $row = mysqli_fetch_row($query);
        $row[1] = trim(preg_replace('/\s\s+/', ' ', $row[1]));
        $row[2] = trim(preg_replace('/\s\s+/', ' ', $row[2]));

        echo "<script type=\"text/javascript\">
        var renderActive = (id,title,author,content,img) => {
            main_content.appendChild(
            renderOnePost(id, title, Date.now(), author, content, img)
            );
        };
        renderActive($row[0], \"$row[1]\",\"$row[4]\",\"$row[2]\",\"$row[5]\");
    </script>";
        $counter = $counter + 1;
 
    ?>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="assets/LeftNavBar/icons/favicon_2.svg">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/layout_style.css">
    <link rel="stylesheet" href="style/stories_style.css">

    <!-- Change this to your page name-->

    <title>Notifications</title>

    <!--################################-->


</head>

<body>
    <div class="container-lg">
        <div class="roww">
            <div class="column left">
                <a href="layout.php">
                    <img style="cursor: pointer; margin-top: 20px; margin-right: 8px;" src="./assets/LeftNavBar/icons/MediumPlus.svg" alt="medium plus" />
                </a>
                <ul class="nav flex-column justify-content-center" style="height: 100%;">
                    <li class="nav-item">
                        <a href="layout.php">
                            <img class="leftAssets nav-link" src="assets/LeftNavBar/home.svg" alt="Home Page">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#">
                            <img class="leftAssets nav-link" src="assets/LeftNavBar/bell_off.svg" alt="Notifications">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#">
                            <img class="leftAssets nav-link" src="assets/LeftNavBar/bookmark.svg" alt="Saved Articles">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="storiesPage.php">
                            <img class="leftAssets nav-link" src="assets/LeftNavBar/icons/stories-icon.svg" alt="stories">
                        </a>
                    </li>
                    <li class="nav-item">
                        <hr style="height: 1px;">
                    </li>
                    <li class="nav-item">
                        <a href="storiesPage.php" style="height:0">
                            <img class="leftAssets nav-link" src="assets/LeftNavBar/write.svg" alt="Write Articles">
                        </a>
                    </li>
                </ul>

            </div>

            <div class="column center" style="font-family:Calibri, 'Trebuchet MS', sans-serif, Arial;">
                <div style="margin: 0 10% 0;">
                    <center style="display: flex; align-items: center;">
                        <h1 style="flex: 40%; font-size:50px; text-align: left;">Notifications</h1>
                        <div style=" flex:40%; ">

                        </div>
                    </center>
                    <div id="all-content" style="padding-top: 0%;">
                        <div>
                            <ul style="display: flex; padding-left:0;list-style:none" id="options">
                                <li id="allNotis">All</li>
                                <li id="responses">Responses</li>
                            </ul>
                            <center>
                                <hr style="text-align:left;margin:0 0 20px;width: 100%; position: relative; top: -17px;">
                            </center>

                        </div>
                        <div>
                            <p>
                                <h3>
                                    You currently don't have any notfications.


                                </h3>
                            </p>
                        </div>
                        <div id="maincontent">

                        </div>
                    </div>
                </div>

            </div>
            <div class="right column" style="">

                <div class="rightBlock">
                    <a href="" role="button" class="btn btn-outline-secondary">Sign in</a>



                    <div class="usr_info_placeholder">
                        <img id="authorImage" style="height: 100; " src="assets/RightBar/usr_img.jpg" class=" rounded-circle w-50" alt="follow">
                        <div id="rightpublisher" class="container">
                            <Strong class="authorName">Mahmoud Mohsen</Strong>
                            <br>
                            <small id="numFollowers">52K followers</small>
                            <br>
                            <button type="button" class="btn btn-outline-success">Follow</button>
                            <br>

                        </div>

                    </div>

                    <div style="height: auto; ">
                        <hr style="opacity: 1; width: 100%;">
                        <strong style="margin-top: 10px; margin-bottom: 10px;">More posts</strong>
                        <div style="position:absolute; bottom:0; margin-left: auto; margin-right: auto;"></div>
                        <div id="postsPreview">
                            <div class="post_demo_placeholder border border-secondary rounded ">

                                <div style="width: 100%; display: flex; flex-direction: column;">
                                    <div style="width:70%; align-items: center;">
                                        <img class="userphoto" src="assets/RightBar/joseph.jpg" alt="user photo">
                                        <small>Joseph fakher</small>
                                    </div>
                                    <strong style="width:auto; font-size:medium;">Lifehack: How to finish CEH in 1 hour. </strong>

                                </div>
                                <img style="width: 30%;height: 50%; padding: 5px;" class="thumbnail" src="assets/RightBar/oscp-vs-ceh.jpg" alt="post img">

                            </div>
                        </div>







                    </div>

                    <div style="display: flex; height: 100%; justify-content: center; ">
                        <br>
                        <a class="helperlinks" href="">About</a>
                        <a class="helperlinks" href="">FAQ</a>
                        <a class="helperlinks" href="">Privacy</a>
                        <a class="helperlinks" href="">Terms</a>
                    </div>
                </div>


            </div>

        </div>
    </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./js/notis.js"></script>
    <script src="./js/post-page.js"></script>
</body>

</html>
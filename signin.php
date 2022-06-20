<?php
include 'logic/connect.php';
$searchErr = '';
$employee_details='';
echo " regalaaaaa <br>";
if(isset($_POST['login']))
{
    echo " Salamo 3alekoooo <br>";
    if(!empty($_POST['email']) && !empty($_POST['password']))
    {
        $email = $_POST['email'];
        $pass = hash('md5',$_POST['password']);
        $stmt = "select * from users where email like '%$email%' and password like '%$pass%'";
        
        $userFound = mysqli_query($conn,$stmt);
        $count = mysqli_num_rows($userFound); 
        echo("before checking for count <br>");
        if($count>0){
            $logged = true ;
            echo("<script>console.log(about to fetch)</script> <br>");
            $row = mysqli_fetch_row($userFound);
            echo("after fetch? <br>");
            echo "<script>document.write(localStorage.uid =  '".$row[0]."')</script> <br>";
            echo "<script>document.write(localStorage.uname =  '$row[1]')</script> <br>";
            echo $row[0];
            echo $row[1];
            //sleep(15);
            echo "<script>window.location.href = 'http://localhost/another-medium/home-page.php' ;</script>";
        }
        else{
            echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Sorry </strong>Email or Password is incorrect!
            <button type="button" class="btn close" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
          </div>';
            
        }
        
         
    
    
    
    }

}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meduim+ | Sign in</title>

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style/signin-up_style.css">
   
</head>
<body class="fullSize">
    <div class="container-md center">

        <div class="row">
            <h1> Welocme Back</h1>
        </div>
        <div class="row">
            <form method="post">
                <div>
                    <label for="email">Email :</label>
                    <br>
                    <input type="email" id="email" name="email" placeholder="123@example.com">
                </div>
                <br>
                <div>
                    <label for="password">Password :</label>
                    <br>
                    <input type="password" id="password" name="password" placeholder="password">
                </div>
                <br>
                <button type="submit" name="login">Sign in</button>
            </form>
        </div>
        <div class="row">
            <p>
                Don't Have an  account ? <a href="signup.php"> Create One</a>
            </p>
        </div>
    </div>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
    <script src="js/signup-in.js"></script>
    </body>

</html>
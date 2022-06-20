<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meduim+ | Sign up</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style/signin-up_style.css">
    <script src="js/signup-in.js"></script>
</head>

<body>
    <div class="container-md center">
        <div class="row">
            <h1>
                Another-Medium
            </h1>
            <h3>
                Ideas that set the mind in motion
            </h3>
        </div>
        <div class="row">
            <form method="post" action="logic/insert.php">
                <div>
                    <label for="email">Email :</label>
                    <br>
                    <input type="email" id="email" name="email" placeholder="123@example.com">
                </div>
                <br>
                <div>
                    <label for="username">UserName :</label>
                    <br>
                    <input type="text" name="username" id="username" placeholder="UserName">
                </div>
                <br>
                <div>
                    <label for="password">Password :</label>
                    <br>
                    <input type="password" id="password" name="password" placeholder="password">
                </div>
                <br>
                <div>
                    <label for="confpassword">Confirm Password :</label>
                    <br>
                    <input type="password" id="confpassword" name="confpassword" placeholder="password">
                </div>
                <br>
                <button type="submit" name="submit">Sign up</button>

            </form>
        </div>

        <div class="row">
            <p>
                Already Have an account <a href="signin.php"> Sign in </a>
            </p>
            <p>
                By Creating an account I accept Another-Medium <span>terms and services</span>
            </p>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
</body>

</html>
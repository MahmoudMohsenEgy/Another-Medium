<?php

require_once("{$_SERVER['DOCUMENT_ROOT']}/Another-Medium/router.php");
//echo $_SERVER['DOCUMENT_ROOT'];
get('/sign-in','signin.php');
get('/sign-up','signup.php');
get('/','index.php');
get('/about-us','about.php');
get('/home-page/$user','home-page.php');
get('/posts/$post','post.php');
// any('/404','views/404.php');

var txt = "";
console.log("hello from js file post-page!")
let title = document.getElementsByTagName("title")[0];
// title.innerText = "haha";

function createPostPreview(post) {
  var postHolder = $("<div></div>");
  var d2 = $("<div></div>");
  var d3 = $("<div></div>");
  var authImg = $("<img>");
  var authName = $("<small></small>");
  var postTitle = $("<strong></strong>");
  var postImg = $("<img>");

  postHolder.attr("class", "post_demo_placeholder shadow bg-white rounded p-2");

  d2.attr("style", "width: 100%; display: flex; flex-direction: column;");

  d3.attr("style", "width:70%; align-items: center;");

  authImg.attr({
    class: "userphoto",
    src: post["authImgSource"],
    alt: "user photo",
  });
  authImg.attr("style", "margin: 2px;");

  authName.text(post.authName);
  authImg.attr("style", "margin:6px");
  postTitle.text(post.title);

  postImg.attr({
    style: "width:30%;height: 50%; padding: 5px;",
    class: "thumbnail",
    src: post["postImgSrc"],
    alt: "post image",
  });

  postHolder.append(d2, postImg);
  d2.append(d3, postTitle);
  d3.append(authImg, authName);
  console.log("Hello Guys");
  $("#postsPreview").append(postHolder);
  console.log(postHolder);
}


function setAuthor(post) {
  $("#authorImage").attr("src", "assets/RightBar/joseph.jpg");
  $(".authorName").text("Mahmoud Mohsen");
  $("#numFollowers").text(
    String(Math.floor(Math.random(0, 100) * 100)) + "K Followers"
  );
}

//setAuthor({})

function setContent(post) {
  setAuthor({});
  //$("#maincontent").text(post.text);
  $("#readingMins").text(
    String(Math.floor(Math.random() * 20) + 1) + " mins read"
  );
}

setContent({})

console.log("Checking for uid and username")
if(localStorage.uid && localStorage.uname){
  console.log("ANA GOWA!!!!!")

  $("#getstartedbutton").text("Hello " + localStorage.uname);
  $("#getstartedbutton").attr({
    class:"btn rndBtn",
    style:"margin-top: 20px; color: #0d9c08;"
  })
  $("#signinbutton").text("Sign out")
  $("#signinbutton").attr({
    class:"btn btn-dark rndBtn text-center",
    style:"margin-top: 20px; width: 100%; ",
  })
}



function checkUserState(){
  var btn = $("#signinbutton");
  if (btn.text().toLowerCase() == "sign up" ){
    localStorage.uid = 0;
    location.uname = 0;
  }
}
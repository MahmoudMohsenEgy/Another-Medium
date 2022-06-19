var txt = ""



function createPostPreview(post){   
    var postHolder = $("<div></div>");
    var d2 = $("<div></div>");
    var d3 = $("<div></div>");
    var authImg = $("<img>");
    var authName = $("<small></small>");
    var postTitle = $("<strong></strong>");
    var postImg = $("<img>");

    postHolder.attr("class", "post_demo_placeholder shadow-sm  bg-white rounded p-2");
    
    d2.attr("style","width: 100%; display: flex; flex-direction: column;");
    
    d3.attr("style","width:70%; align-items: center;");
    
    authImg.attr({
        "class":"userphoto",
        "src":post["authImgSource"],
        "alt":"user photo",
    })
    authImg.attr("style","margin: 2px;");
    
    authName.text(post.authName)
    authImg.attr("style","margin:6px")
    postTitle.text(post.title);
    
    postImg.attr({
        "style":"width: 30%;height: 50%; padding: 5px;",
        "class":"thumbnail",
        "src":post["postImgSrc"],
        "alt":"post image",
    })

    postHolder.append(d2,postImg)
    d2.append(d3,postTitle)
    d3.append(authImg,authName);
    console.log("Hello Guys")
    $("#postsPreview").append(postHolder)
    console.log(postHolder)



    

}
for (let i=0 ; i < 3 ; i++){
createPostPreview({
    postImgSrc:"assets/RightBar/oscp-vs-ceh.jpg",
    authImgSource:"assets/RightBar/joseph.jpg",
    authName: "Joseph Fakher",
    title: " How to crack interviews in 2022"

});
}


function setAuthor(post){
    $("#authorImage").attr("src","assets/RightBar/joseph.jpg");
    $(".authorName").text("Mahmoud Mohsen");
    $("#numFollowers").text(String(Math.floor(Math.random(0,100)*100))+"K Followers")

}

//setAuthor({})

function setContent(post){
    setAuthor({});
    //$("#maincontent").text(post.text);
    $("#readingMins").text(String(Math.floor(Math.random()*20)+1) + " mins read");

}

setContent({})
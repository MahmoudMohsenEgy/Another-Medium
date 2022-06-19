var txt = ""



function createPostPreview(post){   
    var postHolder = $("<div></div>");
    var d2 = $("<div></div>");
    var d3 = $("<div></div>");
    var authImg = $("<img>");
    var authName = $("<small></small>");
    var postTitle = $("<strong></strong>");
    var postImg = $("<img>");

    postHolder.attr("class", "post_demo_placeholder border border-secondary rounded ");
    
    d2.attr("style","width: 100%; display: flex; flex-direction: column;");
    
    d3.attr("style","width:70%; align-items: center;");
    
    authImg.attr({
        "class":"userphoto",
        "src":post["authImgSource"],
        "alt":"user photo",
    })
    
    authName.text(post.authName)
    
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
for (let i=0 ; i < 10 ; i++){
createPostPreview({
    postImgSrc:"assets/RightBar/oscp-vs-ceh.jpg",
    authImgSource:"assets/RightBar/joseph.jpg",
    authName: "Joseph Fakher",
    title: " How to crack interviews in 2022"

});
}


function setAuthor(post){
    $("#authorImage").attr("src","assets/RightBar/usr_img.jpg");
    $(".authorName").text("Mahmoud Mohsen");
    $("#numFollowers").text(String(Math.floor(Math.random(0,100)*100))+"K")

}

//setAuthor({})

function setContent(post){
    setAuthor({});
    //$("#maincontent").text(post.text);
    $("#readingMins").text(String(Math.floor(Math.random()*20)+1) + " mins read");

}

setContent({})
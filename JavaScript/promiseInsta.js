async function likeCode() {
    return new Promise((likedPost)=>{
        likedPost("Liked the Post Successfully")
    })
}
async function commentCode() {
    return new Promise((addComment)=>{
        addComment("Comment added Successfully")
    })
}
async function createPost(){
    var post=new Promise((cPost)=>{
        cPost("Post Created Successfully")
    })
    var[posts,comment,like]=await Promise.all([post,commentCode(),likeCode()])
    console.log(posts)
    console.log(comment)
    console.log(like)
}
createPost()
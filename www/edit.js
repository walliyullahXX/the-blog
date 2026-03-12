const params = new URLSearchParams(window.location.search);

const postId = params.get("id");

async function loadPost(){

let response = await fetch(
"http://localhost/blog-wp/wp-json/wp/v2/posts/" + postId
);

let post = await response.json();

document.getElementById("title").value = post.title.rendered;

document.getElementById("content").value = post.content.rendered;

}

loadPost();


async function editPost(){

let title = document.getElementById("title").value;

let content = document.getElementById("content").value;

const username = "zoom"
const appPassword = "S3j3 cfAT LaX2 WqwF rZsS Xu89"

const credentials = btoa(username + ":" + appPassword);

await fetch(
"http://localhost/blog-wp/wp-json/wp/v2/posts/" + postId,
{
method:"POST",

headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + credentials
},

body: JSON.stringify({
title:title,
content:content
})

});

alert("Post updated");

}
const username = "zoom";
const appPassword = "S3j3 cfAT LaX2 WqwF rZsS Xu89";
const credentials = btoa(`${username}:${appPassword}`);


const apiBase = "http://localhost/blog-wp/wp-json/wp/v2/posts"




const createBtn = document.getElementById("createPostBtn");
const editBtn = document.getElementById("editPostBtn");
const deleteBtn = document.getElementById("deletePostBtn");
const button = document.getElementById("loadPosts");
const container = document.getElementById("post");

button.addEventListener("click", loadPosts);

async function loadPosts() {

  container.innerHTML = "";

  let response = await fetch(
    "http://localhost/blog-wp/wp-json/wp/v2/posts"
  );

  let posts = await response.json();

  console.log(posts);

  posts.forEach(function(post){

  container.innerHTML += 
  `
  <div class="post-item">

  <h2>${post.title.rendered}</h2>

  <p>${post.excerpt.rendered}</p>
  

  <button class="view-btn" onclick="window.open('${post.link}', '_blank')">View Post</button>


  
  <button id="deletePostBtn" onclick="deletePost(${post.id})">Delete</button>
  <button id="editPostBtn" onclick="editPost(${post.id})">Edit Post</button>

  </div>
  <hr>
  `;


});

}

async function viewPost(id) {
  // Fetch the post first to get the link
  const res = await fetch(`http://localhost/blog-wp/wp-json/wp/v2/posts/${id}`);
  const post = await res.json();

   window.location.href = post.link;
}



async function deletePost(id){

const username = "zoom"
const appPassword = "S3j3 cfAT LaX2 WqwF rZsS Xu89"

const credentials = btoa(username + ":" + appPassword);

await fetch(
"http://localhost/blog-wp/wp-json/wp/v2/posts/" + id,
{
method:"DELETE"
});

alert("Post deleted");

location.reload();

}


function editPost(id){

  window.location.href = "edit.html?id=" + id; 
}



const params = new URLSearchParams(window.location.search);

const postId = params.get("id");

async function loadPost(){

  let response = await fetch(
  "http://localhost/blog-wp/wp-json/wp/v2/posts/" + postId
  );

  let post = await response.json();

  document.getElementById("postContent").innerHTML = `
  
  <h2>${post.title.rendered}</h2>

  ${post.content.rendered}

  `;

}

loadPost();
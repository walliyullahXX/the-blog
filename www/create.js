async function createPost() {
const titleValue = document.getElementById("title").value;
const contentValue = document.getElementById("content").value;



try {


const response = await fetch("http://localhost/blog-wp/wp-json/wp/v2/posts", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": "Basic " + credentials
},
body: JSON.stringify({
title: titleValue,
content: contentValue,
status: "publish"
})
});

} catch (error) {
alert("Connection Error. Is XAMPP/WAMP running?");
}
}
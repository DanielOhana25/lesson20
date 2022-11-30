let promise1 = fetch("https://jsonplaceholder.typicode.com/posts");
promise1.then((response) => response.json()).then(arrPosts);

let promise2 = fetch("https://jsonplaceholder.typicode.com/comments");
promise2
  .then((response) => response.json())
  .then(arrComments)
  .then(displayPostAndComment);

let arrPost = [];
let arrComment = [];

function arrPosts(array) {
  array.forEach((element) => {
    if (element.id < 4) {
      console.log(element);
      arrPost.push(element.body);
    }
  });
}

function arrComments(array) {
  array.forEach((element) => {
    if (element.id < 4) {
      console.log(element);
      arrComment.push(element.body);
    }
  });
}

function displayPostAndComment() {
  let postElement = document.createElement("ul");
  let i = 0;
  arrPost.forEach((element) => {
    let newLi = document.createElement("li");
    newLi.innerText = element + " post : " + arrComment[i];
    i = i + 1;
    postElement.appendChild(newLi);
  });
  document.body.appendChild(postElement);
}

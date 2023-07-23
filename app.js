// get ele by ID returns that element
// document.getElementById("page-banner");

//get ele by class name returns array of all ele
// document.getElementByClassName('title)

//get ele by tag name returns array of all ele
// document.getElementByTagName('li')

//good way to loop through these arrays of elements (html collection) and how to turn into array

// let titles = document.getElementsByClassName("title");

// Array.from(titles).forEach((item) => console.log(item));

//we can query select with document.querySelector()

// const wrap = document.querySelector("#wrapper");
// console.log(wrap);

// //grab deeper nested ele
// const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

// //grab all ele matching the query with
// const books = document.querySelectorAll("#book-list li .name");
// console.log(books);

//Content editing

// const books = document.querySelectorAll("#book-list li .name");

// books.forEach((book) => {
//   book.textContent += " (book title)";
// });

const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Books and more books...</h2>";

// bookList.innerHTML += "<p>This is how you add html</p>";

//dom traversal

// console.log("the parent node is:", bookList.parentNode); // can do another .parentNode to chain

// console.log("Book list children are", bookList.children); //returns node list

// console.log("book-list next sibling is", bookList.nextElementSibling);

// console.log("book-list previous sibling is", bookList.previousElementSibling);

// //advanced selecting with dom traversal
// bookList.previousElementSibling.querySelector("p").innerHTML +=
//   "<br />Too cool for everyone else!";

//events

// const h2 = document.querySelector("#book-list h2");

// h2.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(e);
// });

// deleting items

// const btns = document.querySelectorAll("#book-list .delete");

// btns.forEach((btn) =>
//   btn.addEventListener("click", function (e) {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   })
// );

const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add new book
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create ele
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  //add content
  bookName.textContent = value;
  deleteBtn.textContent = "delete";

  //give class names
  bookName.className = "name";
  deleteBtn.className = "delete";

  //append to dom
  li.appendChild(bookName);
  li.appendChild(deleteBtn);

  list.appendChild(li);
});

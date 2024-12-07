//ARRAY FOR HOLDING BOOKS

let myBooks = [];

//CREATES A NEW BOOK OBJECT

function Book(title, author, pages, readingStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readingStatus = readingStatus;
}

// QUERY SELECTORS

let library = document.querySelector(".library");
let dialog = document.querySelector(["dialog"]);

// CREATES A BOOK FUNCTION FOR USE IN A FORM

function createNewBook() {
  let isChecked = document.querySelector("#my-checkbox").checked;
  let titleInput = document.querySelector("#title");
  let authorInput = document.querySelector("#author");
  let pagesInput = document.querySelector("#pages");

  let newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    isChecked
  );
  myBooks.push(newBook);

  let last = myBooks.at(-1);

  let book = document.createElement("div");
  let bookTitle = document.createElement("h2");
  let bookAuthor = document.createElement("div");
  let bookPages = document.createElement("div");
  let bookRead = document.createElement("button");
  let deleteButton = document.createElement("button");
  let containerDiv = document.createElement("div");

  book.classList.add("book-card");
  bookTitle.classList.add("book-title");
  bookAuthor.classList.add("book-author");
  bookPages.classList.add("book-pages");
  bookRead.classList.add("read-status-button");
  deleteButton.classList.add("delete-button");
  containerDiv.classList.add("container-div");

  deleteButton.addEventListener("click", function () {
    book.remove();
    myBooks.splice(myBooks.indexOf(book), 1);
  });

  book.dataset.indexNumber = myBooks.indexOf(last);

  bookTitle.textContent = `${last.title}`;
  bookAuthor.textContent = `${last.author}`;
  bookPages.textContent = `${last.pages}`;
  deleteButton.textContent = "Remove";
  if (last.readingStatus == true) {
    bookRead.textContent = "Read";
  } else if (last.readingStatus == false) {
    bookRead.textContent = "Not read";
  }

  bookRead.addEventListener("click", function () {
    if (bookRead.textContent == "Read") {
      bookRead.textContent = "Not read";
    } else if (bookRead.textContent == "Not read") {
      bookRead.textContent = "Read";
    }
  });

  book.appendChild(bookTitle);
  book.appendChild(bookAuthor);
  book.appendChild(bookPages);
  containerDiv.appendChild(bookRead);
  containerDiv.appendChild(deleteButton);
  book.appendChild(containerDiv);
  library.appendChild(book);
}

//SUBMITS A FORM TO CREATE A BOOK TO DISPLAY

let form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  createNewBook();
  form.reset();
  dialog.close();
});

// OPENS AND CLOSES MODAL

let addButton = document.querySelector(".add-button");
addButton.addEventListener("click", function () {
  dialog.showModal();
});

let closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", function () {
  form.reset();
  dialog.close();
});

//LOOPS TROUGH MYBOOKS ARRAY TO DISPLAY BOOKS ON SCREEN

// myBooks.forEach((book) => {
//   createNewBook()
// });

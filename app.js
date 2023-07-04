// Intializing Variables
const bookstorage = JSON.parse(localStorage.getItem('books-display')) || [];
const bookname = document.getElementById('book-name');
const authorname = document.getElementById('author-name');
const addbutton = document.querySelector('.add-book-button');
const presentbooks = document.querySelector('.books-display');

// Setting the object attributes
const bookobject = {
  title: this.title,
  author: this.author,
  id: this.id,
};

// Function for adding new book details
function addbook(title, author) {
  const newbook = Object.create(bookobject);
  newbook.title = title;
  newbook.author = author;
  newbook.id = bookstorage.length + 1;
  bookstorage.push(newbook);
  localStorage.setItem('bookstorage', JSON.stringify(bookstorage));
}

// Function for displaying added books
function displaybooks() {
  presentbooks.innerHTML = '';
  for (let i = 0; i < bookstorage.length; i += 1) {
    presentbooks.innerHTML += `
      <ul>
          <li>${bookstorage[i].title}</li>
          <li>${bookstorage[i].author}</li>
          <button class='re' type='button' onclick = 'removebook(${bookstorage[i].id})'>remove</button>
      </ul>
    `;
  }
}

// Function for removeing the existed book from object.
function removebook(id) {
  for (let i = 0; i < bookstorage.length; i += 1) {
    if (id === bookstorage[i].id) {
      bookstorage.splice(i, 1);
    }
  }
  // Updating the localStorage
  localStorage.setItem('bookstorage', JSON.stringify(bookstorage));
  displaybooks();
}

// Button functionality for saving the data to the objects.
addbutton.addEventListener('click', () => {
  addbook(bookname.value, authorname.value);
  displaybooks();
  bookname.value = '';
  authorname.value = '';
});

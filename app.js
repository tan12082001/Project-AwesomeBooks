/* eslint-disable max-classes-per-file */
// Intializing Variables
const bookstorage = JSON.parse(localStorage.getItem('books-display')) || [];
const bookname = document.getElementById('book-name');
const authorname = document.getElementById('author-name');
const addbutton = document.querySelector('.add-book-button');
const presentbooks = document.querySelector('#books');

// Books Array class to store books
class Books {
  constructor() {
    this.bookstorage = [];
  }

  addbook(book) {
    this.bookstorage.push(book);
  }
}

// Books Array instance
const storage = new Books();

// class to perform Add book and remove book methods
class Activity {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  // class method to display books
  displaybooks() {
    presentbooks.innerHTML = '';
    for (let i = 0; i < storage.bookstorage.length; i += 1) {
      storage.bookstorage[i].id = (storage.bookstorage.indexOf(storage.bookstorage[i])) + 1;
      presentbooks.innerHTML += `
        <tr>
          <td class="btn-book-name">"${storage.bookstorage[i].title}" by ${storage.bookstorage[i].author} </td>
          <td class="btn-remove"> <button class='re' type='button' id='${storage.bookstorage[i].id}'>remove</button> </td>
        </tr>
      `;
    }
    // Event to call the remove method to remove book
    const deleteBtns = document.querySelectorAll('.re');
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', (e) => {
        this.removeBook(e.target.id);
      });
    });
  }

  // class method to remove a book on click.
  removeBook(id) {
    storage.bookstorage = storage.bookstorage.filter((book) => book.id.toString() !== id);
    this.displaybooks();
    localStorage.setItem('bookstorage', JSON.stringify(storage.bookstorage));
  }
}
// Event to display existing books from localStorage.
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('bookstorage')) {
    const tempstorage = JSON.parse(localStorage.getItem('bookstorage'));
    for (let i = 0; i < tempstorage.length; i += 1) {
      const book = new Activity(tempstorage[i].title, tempstorage[i].author);
      storage.addbook(book);
      book.displaybooks();
    }
  }
});

// event to add book on click on the Add button.
addbutton.addEventListener('click', () => {
  if(bookname.value === '' || authorname.value === '') {
    return null;
  }
  const nbook = new Activity(bookname.value, authorname.value);
  storage.addbook(nbook);
  bookname.value = '';
  authorname.value = '';
  nbook.displaybooks();
  localStorage.setItem('bookstorage', JSON.stringify(storage.bookstorage));
});
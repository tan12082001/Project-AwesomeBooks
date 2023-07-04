
const bookstorage = JSON.parse(localStorage.getItem('books-display')) || [];
const bookname = document.getElementById('book-name');
const authorname = document.getElementById('author-name');
const addbutton = document.querySelector('.add-book-button');
const presentbooks = document.querySelector('.books-display');
const re = document.querySelectorAll('.re');

const bookobject = {
    title: this.title,
    author: this.author,
    id: this.id
};

function addbook (title, author) {
    const newbook = Object.create(bookobject);
    newbook.title = title ;
    newbook.author = author;
    newbook.id = Math.floor(Math.random()*10);
    bookstorage.push(newbook);
    localStorage.setItem('bookstorage', JSON.stringify(bookstorage));
}

function displaybooks() {
    presentbooks.innerHTML = '';
    for(let i=0; i<bookstorage.length; i++ ) {
        presentbooks.innerHTML += `
            <ul>
                <li>${bookstorage[i].title}</li>
                <li>${bookstorage[i].author}</li>
                <button class='re' type='button' onclick = 'removebook(${bookstorage[i].id})'>remove</button>
            </ul>
        `;
        
    }
}

function removebook (id) {
    //bookstorage = bookstorage.filter((book) => book.id != id);
    for(let i=0; i< bookstorage.length; i++ ){
       if( id == bookstorage[i].id ) {
        bookstorage.splice(i, 1);
       }           
    }
    localStorage.setItem('bookstorage', JSON.stringify(bookstorage));
    displaybooks();
}

addbutton.addEventListener('click', () => {
    addbook(bookname.value, authorname.value);
    displaybooks();
    bookname.value = '';
    authorname.value = '';
});



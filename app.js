let bookStorage = JSON.parse(localStorage.getItem('books-display')) || [];
const bookDisplay = document.querySelector('.books-display');
const addBook = document.querySelector('.add-book-button');
const removeBook = document.querySelectorAll('.removebook');
var bookName = document.querySelector('.book');
var authorName = document.getElementById('author-name');

let obj = {};
function displaybooks() {
    for(let i = 0; i<= bookStorage.length; i++) {
        if(bookName.value !== '' && authorName.value !== '') {
            obj.book = bookName.value;
            obj.author = authorName.value;
        
            let newbook = {
              title: obj.book,
              author: obj.author,
            };
            bookStorage.push(newbook);
        
            localStorage.setItem('bookstorage', JSON.stringify(bookStorage));
                
            const outerdiv = document.createElement('div');
            outerdiv.classList.add('outerdiv');
                outerdiv.innerHTML += `
                    <ul class='added-book'>
                    <li class='book-title'>${newbook.title}</li>
                    <li class='book-author'>${newbook.author}</li>
                    
                    </ul>
                `;
                const removebook = document.createElement('button');
                removebook.innerText = 'Remove';
                bookName.value = '';
                authorName.value = '';
                outerdiv.appendChild(removebook);
                bookDisplay.appendChild(outerdiv);
            }
    
   /* function re(id) {
        bookStorage = bookStorage.filter( (book) => book.id.toString() != id);
        localStorage.setItem('books', JSON.stringify(bookStorage));
        displaybooks();
    }
    removeBook.forEach((e) => {
        e.addEventListener('click', (ele) => {
            re(ele.target.id);
        });
    });*/

    }
    console.log(bookStorage[1]);

    
}
displaybooks();
addBook.addEventListener('click', displaybooks);

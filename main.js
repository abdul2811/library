const myLibrary = [];

function Book(title, pages) {
    this.title = title,
    this.pages = pages
}

const addBook = document.getElementById("add")
const modal = document.getElementById("myModal")
// const submit = document.querySelector("form button")
const main = document.querySelector("div.main")
const form = document.getElementById('myForm');


// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the form from submitting (for demo purposes)
// });

addBook.addEventListener("click", function () {
    modal.style.display = "grid";
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

let create = function (title, pages) {
    let card = document.createElement('div');
    card.classList.add('card');
    let titleText = document.createElement('p');
    titleText.classList.add('cardTitle')
    titleText.textContent = title
    card.appendChild(titleText)
    let pageNumber = document.createElement('p');
    pageNumber.textContent = pages
    pageNumber.classList.add('pageNumber')
    card.appendChild(pageNumber)
    let remove = document.createElement('button');
    remove.addEventListener('click', function () {
        let indexToRemove = myLibrary.findIndex(book => book.title === title);
        if (indexToRemove !== -1) {
            myLibrary.splice(indexToRemove, 1);
        }
        card.remove();
    })
    card.appendChild(remove)
    main.appendChild(card);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // let formData = new FormData(event.target);
    let title = document.getElementById('book').value;
    let pages = document.getElementById('pages').value;
    let book = new Book(title, pages)
    myLibrary.push(book)
    console.log(title, pages, myLibrary);
    create(title, pages)
    form.reset()
    modal.style.display = "none"
})

// Add a function that will occur on click of submit that creates cards and adds them to the container which should have a grid repeat
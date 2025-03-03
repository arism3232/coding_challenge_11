// Task1- Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }; // Creating class with strings and numbers.
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }; // Adding method that returns a formtted string of book detials.
    updateCopies(quantity) {
        this.copies += quantity
    }; // Adding a method that modifies the available copies when a book is borrowed or returned. 
};
// Test cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task2- Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId; 
        this.borrowedBooks = [];
    }; // Creating class with various properties including string, number, and array.
    borrowBook(book) {
        this.borrowedBooks.push(book)
    }; // Adding a method that adds a book title to borrowedBooks.
    returnBook(book) {
        this.borrowedBooks = this. borrowedBooks.filter(b => b !== book)
    }; // Adding a method that removes book from borrowedBooks.
};
// Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

// Task3- Creating a Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }; // Creating a class with array of book and borrower instances. 
    addBook(book) {
        this.books.push(book)
    }; // Adding new book to the library
    listBooks() {
        this.books.map(book => console.log(book.getDetails()))
    }; // Logging book details.

    // Task4- Implementing Book Borrowing
    addBorrower(borrower) {
        this.borrowers.push(borrower)
    };
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn)
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId)
        if (book && borrower) {
            if (book.copies > 0) {
                book.updateCopies(-1)
                borrower.borrowBook(book.title)
            } else {
                console.log("Book currently not available for borrowing")
            }
        } else {
            console.log("No book found with matching description")
        }
    }; // Adding method that checks book availability, reduces book cipies by 1, and updates borrower's list. 

    // Task5- Implementing Book Returns
    returnBook(borrowerId, isbn) {
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId)
        const book = this.books.find(book => book.isbn === isbn)
        if (book) {
            book.updateCopies(1)
            if (borrower) {
                borrower.returnBook(book.title)
            }
        }
    }; // Adding a method to increase available copies, and removing book from borrower's list. 
};
// Test Cases
//task3
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
//task4
library.addBorrower(borrower1)
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
//task5
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []
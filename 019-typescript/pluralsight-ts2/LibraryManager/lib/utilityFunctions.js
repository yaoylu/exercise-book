"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintBook = exports.GetTitles = exports.CheckoutBooks = exports.CreateCustomer = exports.CreateCustomerID = exports.GetBookByID = exports.LogBookTitles = exports.GetBookTitlesByCategory = exports.LogFirstAvailable = exports.GetAllMagazines = exports.GetAllBooks = exports.Purge = exports.MaxBooksAllowed = exports.CalculateLateFee = void 0;
const enums_1 = require("../enums");
function CalculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log("This is private...");
}
function Purge(inventory) {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
function GetAllBooks() {
    const books = [
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: enums_1.Category.Fiction },
        { id: 2, title: "A Farewell to Arms", author: "Ernest Hemingway", available: false, category: enums_1.Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: enums_1.Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
exports.GetAllBooks = GetAllBooks;
function GetAllMagazines() {
    const magazines = [
        { title: "Python Programmer Review", publisher: "Smarty Publishing" },
        { title: "Five Points", publisher: "Georgia State University" },
        { title: "Poetry Quarterly", publisher: "Literary Press" },
        { title: "Baseball News", publisher: "Sports Press" }
    ];
    return magazines;
}
exports.GetAllMagazines = GetAllMagazines;
function LogFirstAvailable(books = GetAllBooks()) {
    const numberOfBooks = books.length;
    let firstAvailable = "";
    for (const currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available: " + firstAvailable);
}
exports.LogFirstAvailable = LogFirstAvailable;
function GetBookTitlesByCategory(categoryFilter = enums_1.Category.Fiction) {
    console.log("Getting books in category: " + enums_1.Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (const currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
exports.GetBookTitlesByCategory = GetBookTitlesByCategory;
function LogBookTitles(titles) {
    for (const title of titles) {
        console.log(title);
    }
}
exports.LogBookTitles = LogBookTitles;
function GetBookByID(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
exports.GetBookByID = GetBookByID;
function CreateCustomerID(name, id) {
    return name + id;
}
exports.CreateCustomerID = CreateCustomerID;
function CreateCustomer(name, age, city) {
    console.log("Creating customer " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
exports.CreateCustomer = CreateCustomer;
function CheckoutBooks(customer, ...bookIDs) {
    console.log("Checking out books for " + customer);
    const booksCheckedOut = [];
    for (const id of bookIDs) {
        const book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
exports.CheckoutBooks = CheckoutBooks;
function GetTitles(bookProperty) {
    const allBooks = GetAllBooks();
    const foundTitles = [];
    if (typeof bookProperty == "string") {
        // get all books by a particular author
        for (const book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == "boolean") {
        // get all books based on specified availability
        for (const book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
exports.GetTitles = GetTitles;
function PrintBook(book) {
    const { title, author } = book;
    console.log(title + " by " + author);
}
exports.PrintBook = PrintBook;

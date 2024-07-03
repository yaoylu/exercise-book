"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const classes_1 = require("./classes");
const util = __importStar(require("./lib/utilityFunctions"));
require("./LibrarianExtension");
// ************Module 3: Going Further with Basic Types************
console.log("\n************Module 3: Going Further with Basic Types************\n");
const [book1, book2] = util.GetAllBooks();
function LogBookInfo([book1, book2, ...others]) {
    util.PrintBook(book1);
    util.PrintBook(book2);
    console.log(others);
}
LogBookInfo(util.GetAllBooks());
const catalogLocation = ["A 123.456", book1];
const allBooks = util.GetAllBooks();
const allMagazines = util.GetAllMagazines();
const readingMaterial = util.GetAllMagazines()[0];
function PrintTitle(item) {
    console.log(item.title);
}
const serialNovel = {
    id: 100,
    title: "The Serial Book",
    author: "Librarian",
    available: true,
    category: enums_1.Category.Fiction,
    publisher: "Serial Press"
};
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
const newLibrarian = new classes_1.UniversityLibrarian();
newLibrarian.doResearch("Economics");
const frequency = "annually";
function GetMagazineByFrequency(preferredFrequency) {
    // do something
    return [];
}
// **********Module 4: Using Advanced Type Features**********
console.log("\n**********Module 4: Using Advanced Type Features**********\n");
class LibraryBook {
    Checkout() {
        // do something
        console.log("Checking out a book.");
        return this;
    }
    Checkin() {
        // do something
        // console.log("Checking in a book.");
        if (this instanceof ElectronicBook) {
            console.log("Checking in an electronic book.");
        }
        if (this instanceof ChildLibraryBook) {
            console.log("Checking in a child book.");
        }
        return this;
    }
}
class ChildLibraryBook extends LibraryBook {
    Clean() {
        // do something
        console.log("Cleaning a book.");
        return this;
    }
}
class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice() {
        // do something
        console.log("Removing book from device.");
        return this;
    }
}
const kidBook = new ChildLibraryBook();
kidBook.Checkin()
    .Clean()
    .Checkout();
const ebook = new ElectronicBook();
ebook.Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();
// let mergedBook: Book;
// mergedBook.publisher = "Programming Press";
const newLibrarian2 = new classes_1.UniversityLibrarian();
newLibrarian2.phone = "555-1234";
newLibrarian2.hostSeminar("Budgeting");
// type guards
function LogVisitor(param) {
    if (typeof param === "number") {
        console.log(`${param} new visitors arrived.`);
    }
    if (typeof param === "string") {
        console.log(`${param.toUpperCase()} visited.`);
    }
}
LogVisitor(5);
LogVisitor("Bob");
// custom type guards
function isPublicLibrarian(param) {
    return param.teachCommunity !== undefined;
}
console.log(isPublicLibrarian(newLibrarian2));
const lib = new classes_1.UniversityLibrarian();
function typeOfLibrarian(param) {
    if (lib instanceof classes_1.UniversityLibrarian) {
        lib.assistFaculty();
    }
    if (lib instanceof classes_1.PublicLibrarian) {
        lib.teachCommunity("Math");
    }
}
typeOfLibrarian(lib);
// Symbol
const mySymbol = Symbol("first_symbol");
const anotherSymbol = Symbol("first_symbol");
// console.log(mySymbol === anotherSymbol);
// console.log(typeof mySymbol);
const myObject = {
    [mySymbol]: "value for my symbol key"
};
console.log(myObject[mySymbol]);
newLibrarian2[classes_1.CLASS_INFO]();
const libraryCustomer = {
    name: "Thorne",
    assistCustomer: (custName) => console.log(`Assisting ${custName}`)
};
if (libraryCustomer instanceof classes_1.UniversityLibrarian) {
    console.log("A librarian");
}
else {
    console.log("Not a librarian");
}
// *************Module 5: Creating and Using Decorators*************
console.log("\n*************Module 5: Creating and Using Decorators*************\n");
// creating and using decorators
function uielement(target) {
    console.log("ui element decorator called for: ", target.name);
    // do ui staff here
}
function deprecated(target, methodName, descriptor) {
    console.log("This method will go away soon.", methodName);
}
let ContactForm = class ContactForm {
    submit() {
        // submit form
    }
    validate() {
        // validate form
    }
};
__decorate([
    deprecated
], ContactForm.prototype, "submit", null);
ContactForm = __decorate([
    uielement
], ContactForm);
const lib1 = new classes_1.UniversityLibrarianSealed();
try {
    lib1.assistFaculty = () => console.log("Changed assistFaculty");
    lib1.assistCustomer = () => console.log("Changed assistCustomer");
}
catch (err) {
    console.log(err.message);
}
lib1.assistCustomer("e");
lib1.assistFaculty();
// *************Module 6: Implementing Asynchronous Patterns*************
console.log("\n*************Module 6: Implementing Asynchronous Patterns*************\n");
// // callback pattern
// interface LibMgrCallback {
//     (err: Error, titles: string[]): void;
// }
// function getBooksByCategory(cat: Category, callback: LibMgrCallback): void {
//     setTimeout(() => {
//         try {
//             const foundBooks = util.GetBookTitlesByCategory(cat);
//             if (foundBooks.length > 0) {
//                 callback(null, foundBooks);
//             } else {
//                 throw new Error("No books found.");
//             }
//         } catch (error) {
//             callback(error, null);
//         }
//     }, 2000);
// }
// function logCategorySearch(err: Error, titles: string[]): void {
//     if (err) {
//         console.log(`Error message: ${err.message}`);
//     } else {
//         console.log(titles);
//     }
// }
// console.log("Beginning search...");
// getBooksByCategory(Category.Fiction, logCategorySearch);
// console.log("Search submitted...");
// // promise pattern
// function getBooksByCategoryPromise(cat: Category): Promise<string[]> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const foundBooks = util.GetBookTitlesByCategory(cat);
//             if (foundBooks.length > 0) {
//                 resolve(foundBooks);
//             } else {
//                 reject("No books found.");
//             }
//         }, 2000);
//     });
// }
// console.log("Beginning search...");
// getBooksByCategoryPromise(Category.Fiction)
//     .then(titles => {
//         console.log(`Found titles: ${titles}`);
//         return titles.length;
//     })
//     .then(numOfBooks => console.log(`Number of books found: ${numOfBooks}`))
//     .catch(reason => console.log(`Error: ${reason}`));
// console.log("Search submitted...");
// async/await pattern
function getBooksByCategoryPromise(cat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject("No books found.");
            }
        }, 2000);
    });
}
function logSearchResultsAsync(bookCategory) {
    return __awaiter(this, void 0, void 0, function* () {
        const foundBooks = yield getBooksByCategoryPromise(bookCategory);
        console.log(foundBooks);
    });
}
console.log("Beginning search...");
logSearchResultsAsync(enums_1.Category.Fiction)
    .catch(reason => console.log(reason));
console.log("Search submitted...");

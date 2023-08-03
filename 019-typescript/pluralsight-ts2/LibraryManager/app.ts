import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { PublicLibrarian, UniversityLibrarian, UniversityLibrarianSealed, ReferenceItem, Employee, Researcher, CLASS_INFO} from "./classes";
import * as util from "./lib/utilityFunctions";
import "./LibrarianExtension";

// ************Module 3: Going Further with Basic Types************
console.log("\n************Module 3: Going Further with Basic Types************\n");
const [book1, book2] = util.GetAllBooks();
function LogBookInfo([book1, book2, ...others]: Book[]) {
    util.PrintBook(book1);
    util.PrintBook(book2);
    console.log(others);
}

LogBookInfo(util.GetAllBooks());

// const catalogLocation: [string, Book] = ['A 123.456', book1];

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}
const catalogLocation: KeyValuePair<string, Book> = ["A 123.456", book1];

const allBooks: Book[] = util.GetAllBooks();
const allMagazines: Magazine[] = util.GetAllMagazines();

type PrintMaterial = Book | Magazine;

const readingMaterial: PrintMaterial = util.GetAllMagazines()[0];

function PrintTitle(item: PrintMaterial): void {
    console.log(item.title);
}

const serialNovel: Book & Magazine = {
    id: 100,
    title: "The Serial Book",
    author: "Librarian",
    available: true,
    category: Category.Fiction,
    publisher: "Serial Press"
};

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(UniversityLibrarian,[Employee, Researcher]);

const newLibrarian = new UniversityLibrarian();
newLibrarian.doResearch("Economics");

type Frequency = "monthly" | "annually";

const frequency: Frequency = "annually";

function GetMagazineByFrequency(preferredFrequency: "monthly" | "annually"): Magazine[] {
    // do something
    return [];
}

// **********Module 4: Using Advanced Type Features**********
console.log("\n**********Module 4: Using Advanced Type Features**********\n");
class LibraryBook {
    Checkout(): this {
        // do something
        console.log("Checking out a book.");
        return this;
    }
    Checkin(): this {
        // do something
        // console.log("Checking in a book.");
        if(this instanceof ElectronicBook) {
            console.log("Checking in an electronic book.");
        }
        if(this instanceof ChildLibraryBook) {
            console.log("Checking in a child book.");
        }
        return this;
    }
}

class ChildLibraryBook extends LibraryBook {
    Clean(): this {
        // do something
        console.log("Cleaning a book.");
        return this;
    }
}

class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice(): this {
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

const newLibrarian2 = new UniversityLibrarian();
newLibrarian2.phone = "555-1234";
newLibrarian2.hostSeminar("Budgeting");

// type guards
function LogVisitor(param: number | string) {
    if(typeof param === "number") {
        console.log(`${param} new visitors arrived.`);
    }
    if(typeof param === "string") {
        console.log(`${param.toUpperCase()} visited.`);
    }
}

LogVisitor(5);
LogVisitor("Bob");

// custom type guards
function isPublicLibrarian(param: any): param is PublicLibrarian {
    return (param as PublicLibrarian).teachCommunity !== undefined;
}

console.log(isPublicLibrarian(newLibrarian2));

const lib: Librarian = new UniversityLibrarian();
function typeOfLibrarian(param: Librarian) {

    if(lib instanceof UniversityLibrarian) {
        lib.assistFaculty();
    }
    if(lib instanceof PublicLibrarian) {
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

newLibrarian2[CLASS_INFO]();

const libraryCustomer = {
    name: "Thorne",
    assistCustomer: (custName: string) => console.log(`Assisting ${custName}`)
};

if (libraryCustomer instanceof UniversityLibrarian) {
    console.log("A librarian");
}else{
    console.log("Not a librarian");
}

// *************Module 5: Creating and Using Decorators*************
console.log("\n*************Module 5: Creating and Using Decorators*************\n");
// creating and using decorators
function uielement(target: Function) {
    console.log("ui element decorator called for: ", target.name);
    // do ui staff here
}

function deprecated(target: any, methodName: string, descriptor?: PropertyDescriptor) {
    console.log("This method will go away soon.", methodName);
}

@uielement
class ContactForm {
    @deprecated
    public submit() {
        // submit form
    }
    public validate() {
        // validate form
    }
}

const lib1 = new UniversityLibrarianSealed();

try {
    lib1.assistFaculty = () => console.log("Changed assistFaculty");
    lib1.assistCustomer = () => console.log("Changed assistCustomer");
}catch(err) {
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
function getBooksByCategoryPromise(cat: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            } else {
                reject("No books found.");
            }
        }, 2000);
    });
}

async function logSearchResultsAsync(bookCategory: Category) {
    const foundBooks = await getBooksByCategoryPromise(bookCategory);
    console.log(foundBooks);
}
console.log("Beginning search...");
logSearchResultsAsync(Category.Fiction)
.catch(reason => console.log(reason));
console.log("Search submitted...");

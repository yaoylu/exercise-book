import * as Interfaces from "./interfaces";
import { sealed, logger, readonly, writable } from "./decorators";
class Employee {
    title: string;

    addToSchedule(): void {
        console.log("Employee added to schedule.");
    }

    logTitle(): void {
        console.log(`Employee has the title ${this.title}.`);
    }
}

class Researcher {
    doResearch(topic: string): void {
        console.log(`Doing research on ${topic}.`);
    }
}
export const CLASS_INFO = Symbol();
@logger
@sealed("UniversityLibrarianSealed")
export class UniversityLibrarianSealed implements Interfaces.Librarian, Employee, Researcher {
    constructor() {
        console.log("New instance of UniversityLibrarianSealed created.");
    }
    name: string;
    email: string;
    department: string;

    [CLASS_INFO]() {
        console.log("This class represents a UniversityLibrarian.");
    }

    @readonly
    assistCustomer(custName: string) {
        console.log(this.name + " is assisting " + custName);
    }
    @writable(true)
    assistFaculty() {
        console.log("Assisting faculty.");
    }

    // interface implementation
    title: string;
    addToSchedule: () => void;
    logTitle: () => void;
    doResearch: (topic: string) => void;
}
class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {
    name: string;
    email: string;
    department: string;

    [CLASS_INFO]() {
        console.log("This class represents a UniversityLibrarian.");
    }

    assistCustomer(custName: string) {
        console.log(this.name + " is assisting " + custName);
    }

    assistFaculty() {
        console.log("Assisting faculty.");
    }

    // interface implementation
    title: string;
    addToSchedule: () => void;
    logTitle: () => void;
    doResearch: (topic: string) => void;
}

Object.defineProperty(UniversityLibrarian, Symbol.hasInstance, {
    value: (obj: object) => {
        return obj.hasOwnProperty("name") && obj.hasOwnProperty("assistCustomer");
    }
});
@logger
export class PublicLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log("Assisting customer.");
    }

    teachCommunity(topic: string) {
        console.log("Teaching community.");
    }
}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = "Research";

    constructor(public title: string, protected year: number) {
        console.log("Creating a new ReferenceItem...");
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

export { UniversityLibrarian, ReferenceItem, Employee, Researcher };
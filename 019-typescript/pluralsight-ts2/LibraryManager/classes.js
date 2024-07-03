"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Researcher = exports.Employee = exports.ReferenceItem = exports.UniversityLibrarian = exports.PublicLibrarian = exports.UniversityLibrarianSealed = exports.CLASS_INFO = void 0;
const decorators_1 = require("./decorators");
class Employee {
    addToSchedule() {
        console.log("Employee added to schedule.");
    }
    logTitle() {
        console.log(`Employee has the title ${this.title}.`);
    }
}
exports.Employee = Employee;
class Researcher {
    doResearch(topic) {
        console.log(`Doing research on ${topic}.`);
    }
}
exports.Researcher = Researcher;
exports.CLASS_INFO = Symbol();
let UniversityLibrarianSealed = class UniversityLibrarianSealed {
    constructor() {
        console.log("New instance of UniversityLibrarianSealed created.");
    }
    [exports.CLASS_INFO]() {
        console.log("This class represents a UniversityLibrarian.");
    }
    assistCustomer(custName) {
        console.log(this.name + " is assisting " + custName);
    }
    assistFaculty() {
        console.log("Assisting faculty.");
    }
};
__decorate([
    decorators_1.readonly
], UniversityLibrarianSealed.prototype, "assistCustomer", null);
__decorate([
    (0, decorators_1.writable)(true)
], UniversityLibrarianSealed.prototype, "assistFaculty", null);
UniversityLibrarianSealed = __decorate([
    decorators_1.logger,
    (0, decorators_1.sealed)("UniversityLibrarianSealed")
], UniversityLibrarianSealed);
exports.UniversityLibrarianSealed = UniversityLibrarianSealed;
class UniversityLibrarian {
    [exports.CLASS_INFO]() {
        console.log("This class represents a UniversityLibrarian.");
    }
    assistCustomer(custName) {
        console.log(this.name + " is assisting " + custName);
    }
    assistFaculty() {
        console.log("Assisting faculty.");
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
Object.defineProperty(UniversityLibrarian, Symbol.hasInstance, {
    value: (obj) => {
        return obj.hasOwnProperty("name") && obj.hasOwnProperty("assistCustomer");
    }
});
let PublicLibrarian = class PublicLibrarian {
    assistCustomer(custName) {
        console.log("Assisting customer.");
    }
    teachCommunity(topic) {
        console.log("Teaching community.");
    }
};
PublicLibrarian = __decorate([
    decorators_1.logger
], PublicLibrarian);
exports.PublicLibrarian = PublicLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem...");
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
exports.ReferenceItem = ReferenceItem;
ReferenceItem.department = "Research";

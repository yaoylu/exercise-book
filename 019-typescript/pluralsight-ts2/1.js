"use strict";
let x = (a, b) => 0;
const y = (a) => 0;
x = y; // OK
const dataType1 = {
    id: 1,
    name: 'static',
};
const x1 = { name: '1' };
const y1 = { name: '1', id: 1 };

// A shallow copy of an object creates a new object but inserts references to the original object's children (if the children are objects themselves). It means the copy is not recursively duplicated. In other words, only the top-level structure of the object is duplicated, and nested objects are shared between the original and the copy.
let originalObject = {
    a: 1,
    b: {
        c: 2
    }
};
// Creating a shallow copy
let shallowCopy = Object.assign({}, originalObject);
// Modifying the shallow copy
shallowCopy.a = 10;
shallowCopy.b.c = 20;
console.log("Original Object:", originalObject); // { a: 1, b: { c: 20 } }
console.log("Shallow Copy:", shallowCopy); // { a: 10, b: { c: 20 } }
//---------------------------------- Deep copy ----------------------------------------------------------
// Way 1: Using structuredClone -------------------------------
const structure = {
    height: 2,
    width: {
        w: 5,
        w1: 6
    }
};
let deepcopy = structuredClone(structure);
deepcopy.width.w = 15;
console.log(structure.width.w);
console.log(deepcopy.width.w);
// Way 2: Using Library 
import { cloneDeep } from 'lodash';
let deepcopy = cloneDeep(structure);
// Way 3:  Manual Recursive Copying-------------------------------------
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
let originalObjects = {
    a: 1,
    b: {
        c: 2
    }
};
// Creating a deep copy
let deepCopyObject = deepCopy(originalObjects);
// Modifying the deep copy
deepCopyObject.a = 10;
deepCopyObject.b.c = 20;
console.log("Original Object:", originalObjects); // { a: 1, b: { c: 2 } }
console.log("Deep Copy Object:", deepCopyObject); // { a: 10, b: { c: 20 } }

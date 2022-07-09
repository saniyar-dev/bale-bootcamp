import { createItem } from "./item.js"
import { addObserver } from "../../observer.js";

let lastItemIndex = 0;

// create itemsContainer element with js:
const itemsContainer = document.createElement('div');
itemsContainer.classList.add('items');
itemsContainer.setAttribute('id', 'items');

// create 50 items automatically with js:
const createItems = (num) => {
    lastItemIndex = num;
    for (let i=0; i<num; i++) {
        createItem(i);
    }
}

const addItem = () => {
    createItem(lastItemIndex);
    addObserver(itemsContainer.lastChild)
    lastItemIndex += 1;
}

export {
    itemsContainer,
    createItems,
    addItem,
}
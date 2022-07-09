import { addItem } from "../items/itemContainer.js";

const addButton = document.createElement('button');
addButton.setAttribute('id', 'addButton');
addButton.innerHTML = '+';

const setEventHandlers = () => {
    addButton.addEventListener('click', () => {
        addItem();
    })
}

export {
    addButton,
    setEventHandlers,
}